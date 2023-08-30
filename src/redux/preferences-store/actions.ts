/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: actions.ts
 *   Created at: 2023-07-31, 23:43:20
 *   Last updated at: 2023-08-30, 18:33:07
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
