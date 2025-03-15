import { MachineModes } from '@/utils/machine-modes';

export type SwitchMachineStateActionType = { selectedState: MachineModes };
export type SetInitialTapeInputActionType = { content: string };
export type SetChangeInputStateActionType = { stateLabelValue: string };
export type InsertSourceCodeActionType = { sourceCode: string };
export type LoadExampleProgramActionType = { sourceCode: string };
