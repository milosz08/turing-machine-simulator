import { CodeAreaCompiler } from '@/algorithms/code-area-compiler';
import { TuringAlgorithm } from '@/algorithms/turing-algorithm';
import { TuringReverseAlgorithm } from '@/algorithms/turing-reverse-algorithms';
import { IMachineStoreReduxState, machineStoreReduxState } from '@/redux/machine-store/state';
import { CodeAreaModes } from '@/utils/code-area-modes';
import { MachineModes } from '@/utils/machine-modes';
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import * as ActionType from './action-type';
import * as Action from './actions';

const machineStoreReducer = createReducer(machineStoreReduxState, builder =>
  builder
    .addCase(
      Action.switchMachineStateAction,
      (
        state: IMachineStoreReduxState,
        action: PayloadAction<ActionType.SwitchMachineStateActionType>
      ): void => {
        state.machineState = action.payload.selectedState;
      }
    )
    .addCase(Action.oneStepForwardAction, (state: IMachineStoreReduxState): void => {
      const { machineTuples, findingLabel, tapeValues, headPosition } = state;
      const ta = new TuringAlgorithm(
        machineTuples.labels,
        findingLabel,
        tapeValues.valuesArray,
        headPosition
      );
      const findElement = ta.findMatchTupleForCurrentSymbol();
      let endingInfoObject = ta.preventEndlessLoop();
      if (findElement) {
        const { headPosition: hP, tapeValues: tV } = ta.fixedBlankElements(findElement!);
        const { allSteps, actualState } = ta.settingNextElementFromTuple(
          findElement,
          state.allSteps
        );
        endingInfoObject = ta.endingTupleState(findElement);
        if (findElement.terminate) {
          endingInfoObject = ta.machineStoppedByTupleSign(findElement);
        }
        state.headPosition = hP;
        state.findingLabel = findElement.newState;
        state.allStatesCount += 1;
        state.allHeadPositions = [...state.allHeadPositions, headPosition];
        state.allBlanksElements = [...state.allBlanksElements, ta.blankSpaceAdding];
        state.disabledControls = {
          ...state.disabledControls,
          controlButtons: endingInfoObject.controlButtons,
        };
        state.tapeValues = { ...state.tapeValues, valuesArray: tV };
        state.machineFinish = endingInfoObject.machineFinish;
        state.machineState = endingInfoObject.machineState;
        state.allSteps = allSteps;
        state.actualState = actualState;
        return;
      }
      state.machineFinish = true;
      state.disabledControls = {
        ...state.disabledControls,
        controlButtons: true,
      };
      state.machineState = MachineModes.STOPPED;
      state.machineCustomMessage = `Machine stopped! State '${findingLabel}' has no action 
        for symbol: '${ta.getTapeValue()}' (ln ${state.actualState.prevState!.lineIndex})`;
    })
    .addCase(Action.oneStepBackwardAction, (state: IMachineStoreReduxState): void => {
      const { tapeValues: tV, allSteps: aS, allHeadPositions: aP, allBlanksElements: aB } = state;
      const tr = new TuringReverseAlgorithm(tV.valuesArray, aS, aP, aB);
      if (aS.length > 0) {
        const {
          headPosition,
          actualState,
          allSteps,
          valuesArray,
          allHeadPositions,
          allBlanksElements,
        } = tr.reverseAlgorithm(aS);
        state.headPosition = headPosition;
        state.actualState = actualState;
        state.allSteps = allSteps;
        state.tapeValues = { ...state.tapeValues, valuesArray };
        state.allHeadPositions = allHeadPositions;
        state.allBlanksElements = allBlanksElements;
        return;
      }
      state.machineFinish = true;
      state.disabledControls = {
        ...state.disabledControls,
        controlButtons: true,
      };
    })
    .addCase(
      Action.setInitialTapeInputAction,
      (
        state: IMachineStoreReduxState,
        action: PayloadAction<ActionType.SetInitialTapeInputActionType>
      ): void => {
        let addContent: string = action.payload.content;
        if (action.payload.content === '') {
          addContent = ' ';
        }
        state.tapeValues.initialInput = addContent;
      }
    )
    .addCase(
      Action.setChangeInputStateAction,
      (
        state: IMachineStoreReduxState,
        action: PayloadAction<ActionType.SetChangeInputStateActionType>
      ): void => {
        state.initialStateLabel = action.payload.stateLabelValue;
        if (state.machineState === MachineModes.COMPILE_FAILURE) {
          state.disabledControls.compileButton = false;
        }
      }
    )
    .addCase(Action.machineStartStopTogglingAction, (state: IMachineStoreReduxState): void => {
      if (state.machineState === MachineModes.RUNNING) {
        state.machineState = MachineModes.STOPPED;
      } else {
        state.machineState = MachineModes.RUNNING;
        state.sourceCodeAreaMode = CodeAreaModes.RUNNING;
      }
      state.disabledControls.initialInput = true;
    })
    .addCase(Action.compileCodeAreaAction, (state: IMachineStoreReduxState): void => {
      const compiler = new CodeAreaCompiler(state.rawCodeAreaInput, state.initialStateLabel);
      const { tuplesArray, problemsArray } = compiler;
      const compileIndicator = compiler.validateCodeArea();
      const initialInput = compiler.setInitialInput();
      let compileStatus = MachineModes.COMPILE_FAILURE;
      if (initialInput) {
        state.tapeValues.initialInput = initialInput;
      }
      if (compileIndicator) {
        compileStatus = MachineModes.COMPILE_SUCCESSFUL;
        state.disabledControls.resetButton = false;
      }
      state.disabledControls.compileButton = true;
      state.machineState = compileStatus;
      state.sourceCodeAreaMode = CodeAreaModes.COMPILED;
      state.machineTuples = { labels: tuplesArray, errors: problemsArray };
    })
    .addCase(Action.enableCompileButtonAction, (state: IMachineStoreReduxState): void => {
      state.disabledControls.compileButton = false;
    })
    .addCase(
      Action.insertSourceCodeAction,
      (
        state: IMachineStoreReduxState,
        action: PayloadAction<ActionType.InsertSourceCodeActionType>
      ): void => {
        state.rawCodeAreaInput = action.payload.sourceCode;
      }
    )
    .addCase(Action.disableAllControlButtonsAction, (state: IMachineStoreReduxState): void => {
      state.disabledControls.controlButtons = true;
    })
    .addCase(
      Action.loadExampleProgramAction,
      (
        state: IMachineStoreReduxState,
        action: PayloadAction<ActionType.LoadExampleProgramActionType>
      ): void => {
        state.rawCodeAreaInput = action.payload.sourceCode;
        state.machineState = MachineModes.SUCCESSFULLY_LOAD_PROGRAM;
        state.sourceCodeAreaMode = CodeAreaModes.IDLE;
      }
    )
    .addCase(Action.setLoadAjaxErrorAction, (state: IMachineStoreReduxState): void => {
      state.machineState = MachineModes.AJAX_ERROR_LOAD;
    })
    .addCase(
      Action.disableControlsBeforeLoadProgramAction,
      (state: IMachineStoreReduxState): void => {
        state.disabledControls.controlButtons = true;
        state.disabledControls.resetButton = true;
      }
    )
    .addCase(Action.loadInitialInputOnTapeAction, (state: IMachineStoreReduxState): void => {
      state.tapeValues.valuesArray = [...state.tapeValues.initialInput];
    })
    .addCase(Action.machineResetAction, (state: IMachineStoreReduxState): void => {
      state.machineState = MachineModes.RESET;
      state.sourceCodeAreaMode = CodeAreaModes.IDLE;
      state.headPosition = 0;
      state.allStatesCount = 0;
      state.allSteps = [];
      state.machineFinish = false;
      state.findingLabel = state.initialStateLabel;
      state.actualState = {
        prevState: null,
        nextState: null,
      };
      state.tapeValues = {
        ...state.tapeValues,
        valuesArray: [...state.tapeValues.initialInput],
      };
      state.disabledControls = {
        ...state.disabledControls,
        initialInput: false,
        controlButtons: false,
      };
      state.machineCustomMessage = null;
    })
);

export { machineStoreReducer };
