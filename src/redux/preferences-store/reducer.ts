import { InputIndicators } from '@/algorithms/input-indicators';
import { HeadSpeed } from '@/utils/head-speed';
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import * as ActionType from './action-type';
import * as Action from './actions';
import { IPreferencesStoreReduxState, preferencesStoreReduxState } from './state';

const preferencesStoreReducer = createReducer(preferencesStoreReduxState, builder =>
  builder
    .addCase(
      Action.switchThemeAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.SwitchThemeActionType>
      ): void => {
        state.currentThemeMode = action.payload.selectedTheme;
      }
    )
    .addCase(
      Action.switchHeadSpeedAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.SwitchHeadSpeedActionType>
      ): void => {
        state.headSpeed = action.payload.selectedSpeed;
      }
    )
    .addCase(Action.toggleCodeFollowAction, (state: IPreferencesStoreReduxState): void => {
      const prevValue = state.ifCodeFollow;
      state.ifCodeFollow = !prevValue;
    })
    .addCase(
      Action.changeHeadSpeedAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.ChangeHeadSpeedActionType>
      ): void => {
        state.headSpeed = HeadSpeed.MAX - action.payload.rawHeadSpeed + HeadSpeed.MIN;
      }
    )
    .addCase(
      Action.changeCodeAreaScrollPosAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.ChangeCodeAreaScrollPosActionType>
      ): void => {
        state.codeScrollPos = action.payload.scrollPos;
      }
    )
    .addCase(
      Action.calculateCursorPosAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.CalculateCursorPosActionType>
      ): void => {
        const inputIndicators = new InputIndicators(action.payload.areaRef!.current);
        const { ln, col } = inputIndicators.convertInputSelection();
        state.cursorPosition = {
          ln,
          col,
          sel: inputIndicators.getInputSelection(),
        };
      }
    )
    .addCase(
      Action.toggleErrorsTabVisibilityAction,
      (
        state: IPreferencesStoreReduxState,
        action: PayloadAction<ActionType.ToggleErrorsTabVisibilitActionType>
      ): void => {
        state.ifOpenErrors = action.payload.isVisible;
      }
    )
    .addCase(Action.resetCursorPositionAction, (state: IPreferencesStoreReduxState): void => {
      state.cursorPosition = { ln: 0, col: 0, sel: 0 };
    })
);

export { preferencesStoreReducer };
