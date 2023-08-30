/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: code-inspections.component.tsx
 *   Created at: 2023-08-01, 21:01:54
 *   Last updated at: 2023-08-30, 18:42:38
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
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import CompileAreaHelpers from '~/app-algorithms/compile-area-helpers';
import {
  CodeInspectionsContainer,
  TerminalMode,
} from '~/app-components/code-inspections/code-inspections.styles';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';

const TerminalLeftInfoContentComponent = React.lazy(
  () => import('./subcomponents/terminal-left-info-content.component')
);

const CodeInspectionsComponent: React.FC = (): JSX.Element => {
  const { ifOpenErrors }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );
  const { sourceCodeAreaMode }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );

  const backgroundColors =
    CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

  return (
    <CodeInspectionsContainer
      $background={backgroundColors}
      $openWindow={ifOpenErrors}>
      <TerminalMode>Current status: {sourceCodeAreaMode}</TerminalMode>
      <TerminalLeftInfoContentComponent />
    </CodeInspectionsContainer>
  );
};

export default CodeInspectionsComponent;
