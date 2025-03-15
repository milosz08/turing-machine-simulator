import { TapeValues } from '@/utils/machine-config';

class TuringReverseAlgorithm {
  private readonly _allSteps: { [key: string]: string }[];
  private readonly _allHeadPos: number[];
  private readonly _allBlanks: boolean[];

  private readonly _tape: string[] | undefined;
  private _prevStep: { [key: string]: string } | undefined;
  private _prevHeadPos: number | undefined;
  private _prevBlank: boolean | undefined;

  constructor(
    tape: string[],
    allSteps: { [key: string]: string }[],
    allHeadPos: number[],
    allBlanks: boolean[]
  ) {
    this._tape = tape;
    this._allSteps = allSteps;
    this._allHeadPos = allHeadPos;
    this._allBlanks = allBlanks;
  }

  reverseAlgorithm(allSteps: { [key: string]: string }[]) {
    this.removeSingleElement();
    this.replaceSingleCharacter();
    return {
      headPosition: this._prevHeadPos,
      actualState: {
        prevState: this._prevStep,
        nextState: this.nextElementSetter(allSteps),
      },
      allSteps: this._allSteps,
      valuesArray: this._tape,
      allHeadPositions: this._allHeadPos,
      allBlanksElements: this._allBlanks,
    };
  }

  private removeSingleElement(): void {
    this._prevStep = this._allSteps.pop();
    this._prevHeadPos = this._allHeadPos.pop();
    this._prevBlank = this._allBlanks.pop();
  }

  private replaceSingleCharacter(): void {
    let signToReplace;
    switch (this._prevStep!.currentSymbol) {
      case TapeValues.BLANK:
        signToReplace = TapeValues.SPACE;
        break;
      case TapeValues.ANY:
        signToReplace = TapeValues.ANY;
        break;
      default:
        signToReplace = this._prevStep!.currentSymbol;
    }
    if (signToReplace !== TapeValues.ANY) {
      this._tape![this._prevHeadPos!] = signToReplace;
    }
    if (this._prevBlank && this._prevStep!.direction !== TapeValues.LEG_DIR.RIGHT) {
      this._tape!.splice(this._prevHeadPos!, 1);
    }
  }

  private nextElementSetter(allSteps: { [key: string]: string }[]) {
    let nextElement = this._allSteps[allSteps.length - 2];
    if (!nextElement) {
      nextElement = this._prevStep!;
    }
    return nextElement;
  }
}

export { TuringReverseAlgorithm };
