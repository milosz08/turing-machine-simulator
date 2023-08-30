/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: turing-algorithm.ts
 *   Created at: 2023-08-01, 18:12:25
 *   Last updated at: 2023-08-30, 18:56:45
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */
import { CompileAndRun, TapeValues } from '~/app-utils/machine-config';
import { MachineModes } from '~/app-utils/machine-modes';

class TuringAlgorithm {
  private _labels: { [key: string]: string }[] = [];
  private _sameStatesSearch: { [key: string]: string }[] = [];
  private _blankSpaceAdding: boolean = false;
  private _tapeValues: string[] | any;
  private readonly _headPosition: number;

  constructor(
    labels: {
      [key: string]: string;
    }[],
    findingLabel: string,
    tapeValues: string[],
    headPosition: number
  ) {
    this._labels = labels;
    this._sameStatesSearch = labels.filter(
      el => el.currentState === findingLabel
    );
    this._tapeValues = tapeValues;
    this._headPosition = headPosition;
  }

  private static getSingleValueFromTape(currentTapeSymbol: string): string {
    if (currentTapeSymbol === TapeValues.SPACE) {
      return TapeValues.BLANK;
    }
    return currentTapeSymbol;
  }

  findMatchTupleForCurrentSymbol() {
    const currSymbol = TuringAlgorithm.getSingleValueFromTape(
      this._tapeValues[this._headPosition]
    );
    const findMatchElement = this._sameStatesSearch.find(
      label => label.currentSymbol === currSymbol
    );
    if (!findMatchElement) {
      return this._sameStatesSearch.find(
        label => label.currentSymbol === TapeValues.ANY
      );
    }
    return findMatchElement;
  }

  private replaceSingleChar(findingElement: {
    [key: string]: string;
  }): string[] | any {
    let signToReplace: string;
    switch (findingElement.newSymbol) {
      case TapeValues.BLANK:
        signToReplace = TapeValues.SPACE;
        break;
      case TapeValues.ANY:
        signToReplace = TapeValues.ANY;
        break;
      default:
        signToReplace = findingElement.newSymbol;
    }
    if (signToReplace !== TapeValues.ANY) {
      const copy = [...this._tapeValues];
      copy[this._headPosition] = signToReplace;
      return copy;
    }
    return this._tapeValues;
  }

  private moveMachineHead(findingElement: { [key: string]: string }): number {
    const headPosition = this._headPosition;
    switch (findingElement.direction) {
      case TapeValues.LEG_DIR.RIGHT:
        return headPosition + 1;
      case TapeValues.LEG_DIR.LEFT:
        return headPosition - 1;
      default:
        return headPosition;
    }
  }

  fixedBlankElements(findingElement: { [key: string]: string }): {
    headPosition: number;
    tapeValues: string[];
  } {
    if (
      findingElement.direction === TapeValues.LEG_DIR.RIGHT &&
      !this._tapeValues[this._headPosition + 1]
    ) {
      this._blankSpaceAdding = true;
      this._tapeValues = [
        ...this.replaceSingleChar(findingElement),
        TapeValues.SPACE,
      ];
      return {
        headPosition: this._headPosition + 1,
        tapeValues: this._tapeValues,
      };
    }
    if (
      findingElement.direction === TapeValues.LEG_DIR.LEFT &&
      this._headPosition === 0
    ) {
      this._blankSpaceAdding = true;
      this._tapeValues = [TapeValues.SPACE].concat([
        ...this.replaceSingleChar(findingElement),
      ]);
      return {
        headPosition: this._headPosition,
        tapeValues: this._tapeValues,
      };
    }
    return {
      tapeValues: this.replaceSingleChar(findingElement),
      headPosition: this.moveMachineHead(findingElement),
    };
  }

  settingNextElementFromTuple(
    findingElement: { [key: string]: string },
    stepsArray: {
      [key: string]: string;
    }[]
  ) {
    const nextElementSearch = this._labels.filter(
      label => label.currentState === findingElement.newState
    );
    let symbol: string;
    switch (this._tapeValues[this._headPosition]) {
      case TapeValues.SPACE:
        symbol = TapeValues.BLANK;
        break;
      default:
        symbol = this._tapeValues[this._headPosition];
    }
    let findMathNextElm = nextElementSearch.find(
      label => label.currentSymbol === symbol
    );
    if (!findMathNextElm) {
      findMathNextElm = nextElementSearch.find(
        label => label.currentSymbol === TapeValues.ANY
      );
      if (!findMathNextElm) {
        findMathNextElm = findingElement;
      }
    }
    return {
      allSteps: [...stepsArray, findingElement],
      actualState: { prevState: findingElement, nextState: findMathNextElm },
    };
  }

  private static returnedInfoObject(
    finish: boolean,
    state: MachineModes | string,
    controlButtons: boolean
  ): { [key: string]: any } {
    return {
      machineFinish: finish,
      machineState: state,
      controlButtons: controlButtons,
    };
  }

  preventEndlessLoop(): { [key: string]: any } {
    if (
      this._tapeValues.filter((value: any) => value === TapeValues.SPACE)
        .length > 50
    ) {
      return TuringAlgorithm.returnedInfoObject(true, MachineModes.LOOP, true);
    }
    return TuringAlgorithm.returnedInfoObject(
      false,
      MachineModes.RUNNING,
      false
    );
  }

  endingTupleState(findingElement: { [key: string]: string }) {
    if (
      findingElement.newState ===
      `${CompileAndRun.STOP_LABEL}-${findingElement.currentState}`
    ) {
      return TuringAlgorithm.returnedInfoObject(
        true,
        MachineModes.FINISH,
        true
      );
    }
    return TuringAlgorithm.returnedInfoObject(
      false,
      MachineModes.RUNNING,
      false
    );
  }

  machineStoppedByTupleSign(findingElement: { [key: string]: string }) {
    if (findingElement.terminate) {
      return TuringAlgorithm.returnedInfoObject(
        false,
        MachineModes.STOPPED,
        false
      );
    }
    return TuringAlgorithm.returnedInfoObject(
      false,
      MachineModes.RUNNING,
      false
    );
  }

  getTapeValue(): string {
    return this._tapeValues[this._headPosition];
  }

  get blankSpaceAdding(): boolean {
    return this._blankSpaceAdding;
  }
}

export default TuringAlgorithm;
