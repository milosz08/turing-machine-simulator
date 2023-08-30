/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: action-type.ts
 *   Created at: 2023-07-31, 23:54:09
 *   Last updated at: 2023-08-30, 18:32:51
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
import type { MutableRefObject } from 'react';
import { HeadSpeed } from '~/app-utils/head-speed';
import { ThemeModes } from '~/app-utils/theme-modes';

export type SwitchThemeActionType = { selectedTheme: ThemeModes };
export type SwitchHeadSpeedActionType = { selectedSpeed: HeadSpeed };
export type ChangeHeadSpeedActionType = { rawHeadSpeed: number };
export type ChangeCodeAreaScrollPosActionType = { scrollPos: number };
export type CalculateCursorPosActionType = { areaRef: MutableRefObject<any> };
export type ToggleErrorsTabVisibilitActionType = { isVisible: boolean };
