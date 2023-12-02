/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
