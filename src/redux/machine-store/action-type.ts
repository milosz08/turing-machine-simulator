/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: action-type.ts
 * Last modified: 8/1/23, 5:53 PM
 * Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import { MachineModes } from "~/app-utils/machine-modes";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type SwitchMachineStateActionType = { selectedState: MachineModes };
export type SetInitialTapeInputActionType = { content: string };
export type SetChangeInputStateActionType = { stateLabelValue: string };
export type InsertSourceCodeActionType = { sourceCode: string };
export type LoadExampleProgramActionType = { sourceCode: string };
