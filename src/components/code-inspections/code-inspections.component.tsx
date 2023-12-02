/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
import TerminalLeftInfoContentComponent from './subcomponents/terminal-left-info-content.component';

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
