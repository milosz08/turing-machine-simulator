/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: reducer.ts
 *   Created at: 2023-07-31, 23:42:01
 *   Last updated at: 2023-08-30, 18:33:18
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
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import InputIndicators from '~/app-algorithms/input-indicators';
import { HeadSpeed } from '~/app-utils/head-speed';
import * as ActionType from './action-type';
import * as Action from './actions';
import {
  IPreferencesStoreReduxState,
  preferencesStoreReduxState,
} from './state';

export const preferencesStoreReducer = createReducer(
  preferencesStoreReduxState,
  builder =>
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
      .addCase(
        Action.toggleCodeFollowAction,
        (state: IPreferencesStoreReduxState): void => {
          const prevValue = state.ifCodeFollow;
          state.ifCodeFollow = !prevValue;
        }
      )
      .addCase(
        Action.changeHeadSpeedAction,
        (
          state: IPreferencesStoreReduxState,
          action: PayloadAction<ActionType.ChangeHeadSpeedActionType>
        ): void => {
          state.headSpeed =
            HeadSpeed.MAX - action.payload.rawHeadSpeed + HeadSpeed.MIN;
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
          const inputIndicators = new InputIndicators(
            action.payload.areaRef!.current
          );
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
      .addCase(
        Action.resetCursorPositionAction,
        (state: IPreferencesStoreReduxState): void => {
          state.cursorPosition = { ln: 0, col: 0, sel: 0 };
        }
      )
);
