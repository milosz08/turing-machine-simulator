import type { MutableRefObject } from 'react';
import { HeadSpeed } from '@/utils/head-speed';
import { ThemeModes } from '@/utils/theme-modes';

export type SwitchThemeActionType = { selectedTheme: ThemeModes };
export type SwitchHeadSpeedActionType = { selectedSpeed: HeadSpeed };
export type ChangeHeadSpeedActionType = { rawHeadSpeed: number };
export type ChangeCodeAreaScrollPosActionType = { scrollPos: number };
export type CalculateCursorPosActionType = { areaRef: MutableRefObject<any> };
export type ToggleErrorsTabVisibilitActionType = { isVisible: boolean };
