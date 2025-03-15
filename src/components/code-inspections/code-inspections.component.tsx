import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { CompileAreaHelpers } from '@/algorithms/compile-area-helpers';
import {
  CodeInspectionsContainer,
  TerminalMode,
} from '@/components/code-inspections/code-inspections.styles';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { TerminalLeftInfoContentComponent } from './subcomponents/terminal-left-info-content.component';

const CodeInspectionsComponent: React.FC = (): JSX.Element => {
  const { ifOpenErrors }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );
  const { sourceCodeAreaMode }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );

  const backgroundColors = CompileAreaHelpers.selectBarBackground(sourceCodeAreaMode);

  return (
    <CodeInspectionsContainer $background={backgroundColors} $openWindow={ifOpenErrors}>
      <TerminalMode>Current status: {sourceCodeAreaMode}</TerminalMode>
      <TerminalLeftInfoContentComponent />
    </CodeInspectionsContainer>
  );
};

export { CodeInspectionsComponent };
