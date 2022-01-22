/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import { CompileAndRun, TapeValues } from '../config/machineConfig';
import { machineModes } from '../redux/machineStore/types';

class TuringAlgorithm {

    private _labels: { [key: string]: string }[] = [];
    private _sameStatesSearch: { [key: string]: string }[] = [];
    private _blankSpaceAdding: boolean = false;
    private _tapeValues: string[] | any;
    private readonly _headPosition: number;

    public constructor(labels: { [key: string]: string }[], findingLabel: string, tapeValues: string[], headPosition: number) {
        this._labels = labels;
        this._sameStatesSearch = labels.filter(el => el.currentState === findingLabel);
        this._tapeValues = tapeValues;
        this._headPosition = headPosition;
    };

    /**
     * Method responsible for find blank value (space) on machine tape.
     */
    private static getSingleValueFromTape(currentTapeSymbol: string): string {
        if(currentTapeSymbol === TapeValues.SPACE) {
            return TapeValues.BLANK;
        }
        return currentTapeSymbol;
    };

    /**
     * Method responsible for finding single tuple based symbol (based head position on machine tape)
     */
    public findMatchTupleForCurrentSymbol() {
        const currSymbol = TuringAlgorithm.getSingleValueFromTape(this._tapeValues[this._headPosition]);
        const findMatchElement = this._sameStatesSearch.find(label => label.currentSymbol === currSymbol);
        if(Boolean(!findMatchElement)) {
            return this._sameStatesSearch.find(label => label.currentSymbol === TapeValues.ANY);
        }
        return findMatchElement;
    };

    /**
     * Method responsible for change single character on tape based head position and next tape value in
     * tuple label. Also converting normal character into label character notation.
     */
    private replaceSingleChar(findingElement: { [key: string]: string }): string[] | any {
        let signToReplace: string;
        switch(findingElement.newSymbol) {
            case TapeValues.BLANK:
                signToReplace = TapeValues.SPACE;
                break;
            case TapeValues.ANY:
                signToReplace = TapeValues.ANY;
                break;
            default:
                signToReplace = findingElement.newSymbol;
        }
        if(signToReplace !== TapeValues.ANY) {
            let copy = [...this._tapeValues];
            copy[this._headPosition] = signToReplace;
            return copy;
        }
        return this._tapeValues;
    };

    /**
     * Method responsible for move head into forward, backward and stay in current position.
     */
    private moveMachineHead(findingElement: { [key: string]: string }): number {
        let headPosition = this._headPosition;
        switch(findingElement.direction) {
            case TapeValues.LEG_DIR.RIGHT:
                return headPosition + 1;
            case TapeValues.LEG_DIR.LEFT:
                return headPosition - 1;
            default:
                return headPosition;
        }
    };

    /**
     * Method responsible for handled end of tape sequence. In left side, algorithm move head into one
     * position to the right and in right side, move to the left.
     */
    public fixedBlankElements(findingElement: { [key: string]: string }): { headPosition: number, tapeValues: string[] } {
        if(findingElement.direction === TapeValues.LEG_DIR.RIGHT && !this._tapeValues[this._headPosition + 1]) {
            this._blankSpaceAdding = true;
            this._tapeValues = [ ...this.replaceSingleChar(findingElement), TapeValues.SPACE ];
            return {
                headPosition: this._headPosition + 1, tapeValues: this._tapeValues,
            };
        }
        if(findingElement.direction === TapeValues.LEG_DIR.LEFT && this._headPosition === 0) {
            this._blankSpaceAdding = true;
            this._tapeValues = [TapeValues.SPACE].concat([ ...this.replaceSingleChar(findingElement) ]);
            return {
                headPosition: this._headPosition, tapeValues: this._tapeValues,
            };
        }
        return {
            tapeValues: this.replaceSingleChar(findingElement),
            headPosition: this.moveMachineHead(findingElement),
        };
    };

    /**
     * Method responsible for setting objects about previous label (state) and next label (state).
     */
    public settingNextElementFromTuple(findingElement: { [key: string]: string }, stepsArray: { [key: string]: string }[]) {
        const nextElementSearch = this._labels.filter(label => label.currentState === findingElement.newState);
        let symbol: string;
        switch(this._tapeValues[this._headPosition]) {
            case TapeValues.SPACE:
                symbol = TapeValues.BLANK
                break;
            default:
                symbol = this._tapeValues[this._headPosition];
        }
        let findMathNextElm = nextElementSearch.find(label => label.currentSymbol === symbol);
        if(!findMathNextElm) {
            findMathNextElm = nextElementSearch.find(label => label.currentSymbol === TapeValues.ANY);
            if(!findMathNextElm) {
                findMathNextElm = findingElement;
            }
        }
        return {
            allSteps: [ ...stepsArray, findingElement ],
            actualState: { prevState: findingElement, nextState: findMathNextElm }
        };
    };

    private static returnedInfoObject(
        finish: boolean, state: machineModes | string, controlButtons: boolean
    ): { [key: string]: any } {
        return {
            machineFinish: finish, machineState: state, controlButtons: controlButtons,
        }
    };

    /**
     * Method responsible for prevent endless loop based count of blank characters on tape.
     */
    public preventEndlessLoop(): { [key: string]: any } {
        if(this._tapeValues.filter((value: any) => value === TapeValues.SPACE).length > 50) {
            return TuringAlgorithm.returnedInfoObject(true, machineModes.LOOP, true);
        }
        return TuringAlgorithm.returnedInfoObject(false, machineModes.RUNNING, false);
    };

    /**
     * Method responsible for end single sequence if find end label element.
     */
    public endingTupleState(findingElement: { [key: string]: string }) {
        if(findingElement.newState === `${CompileAndRun.STOP_LABEL}-${findingElement.currentState}`) {
            return TuringAlgorithm.returnedInfoObject(true, machineModes.FINISH, true);
        }
        return TuringAlgorithm.returnedInfoObject(false, machineModes.RUNNING, false);
    };

    /**
     * Method responsible for stopping machine after find terminate symbol in single tuple.
     */
    public machineStoppedByTupleSign(findingElement: { [key: string]: string }) {
        if (findingElement.terminate) {
            return TuringAlgorithm.returnedInfoObject(false, machineModes.STOPPED, false);
        }
        return TuringAlgorithm.returnedInfoObject(false, machineModes.RUNNING, false);
    };

    public getTapeValue(): string {
        return this._tapeValues[this._headPosition];
    };

    get blankSpaceAdding(): boolean {
        return this._blankSpaceAdding;
    }
}

export default TuringAlgorithm;