/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { createAction } from '@reduxjs/toolkit';
import * as ActionType from './action-type';

enum Actions {
  SWITCHING_THEME = '[PREFERENCES REDUCER] SWITCHING THEME',
  SWITCHING_HEAD_SPEED = '[PREFERENCES REDUCER] SWITCHING HEAD SPEED',
  TOGGLE_CODE_FOLLOW = '[PREFERENCES REDUCER] TOGGLE CODE FOLLOW',
  CHANGE_HEAD_SPEED = '[PREFERENCES REDUCER] CHANGE HEAD SPEED',
  CHANGE_CODE_AREA_SCROLL_POS = '[PREFERENCES REDUCER] CHANGE CODE AREA SCROLL POS',
  CALCULATE_CURSOR_POS = '[MACHINE REDUCER] CALCULATE CURSOR POS',
  TOGGLE_ERRORS_TAB_VISIBILITY = '[MACHINE REDUCER] TOGGLE ERRORS TAB VISIBILITY',
  RESET_CURSOR_POSITION = '[MACHINE REDUCER] RESET CURSOR POSITION',
}

export const switchThemeAction = createAction<
  ActionType.SwitchThemeActionType,
  Actions
>(Actions.SWITCHING_THEME);

export const switchHeadSpeedAction = createAction<
  ActionType.SwitchHeadSpeedActionType,
  Actions
>(Actions.SWITCHING_HEAD_SPEED);

export const toggleCodeFollowAction = createAction<void, Actions>(
  Actions.TOGGLE_CODE_FOLLOW
);

export const changeHeadSpeedAction = createAction<
  ActionType.ChangeHeadSpeedActionType,
  Actions
>(Actions.CHANGE_HEAD_SPEED);

export const changeCodeAreaScrollPosAction = createAction<
  ActionType.ChangeCodeAreaScrollPosActionType,
  Actions
>(Actions.CHANGE_CODE_AREA_SCROLL_POS);

export const calculateCursorPosAction = createAction<
  ActionType.CalculateCursorPosActionType,
  Actions
>(Actions.CALCULATE_CURSOR_POS);

export const toggleErrorsTabVisibilityAction = createAction<
  ActionType.ToggleErrorsTabVisibilitActionType,
  Actions
>(Actions.TOGGLE_ERRORS_TAB_VISIBILITY);

export const resetCursorPositionAction = createAction<void, Actions>(
  Actions.RESET_CURSOR_POSITION
);
