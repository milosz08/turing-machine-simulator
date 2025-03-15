import type { JSX } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  SyntaxErrorsInfoContainer,
  SyntaxErrorsInfoHeader,
  SyntaxErrorsListElement,
  SyntaxErrorsListElementDanger,
  SyntaxErrorsUnorderedList,
} from '@/components/code-inspections/code-inspections.styles';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { NonChangeValues } from '@/styles/theme-styles';
import { CompilerSyntaxIssues } from '@/utils/machine-messages';
import { SyntaxNonErrorsComponent } from '../subcomponents/syntax-non-errors.component';

const SyntaxErrorInfoComponent: React.FC = (): JSX.Element => {
  const { machineTuples }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { ifOpenErrors }: Partial<IPreferencesStoreReduxState> = useSelector(
    (state: RootState) => state.preferences
  );

  const { errors } = machineTuples;
  const { ERROR_COLOUR, WARNING_COLOUR } = NonChangeValues;

  const generateErrorsList: JSX.Element[] = machineTuples.errors.map((error: any) => (
    <SyntaxErrorsListElement key={`${error.problemType}__${error.lineIndex}__${error.labelIndex}`}>
      Ln {error.lineIndex}:{' '}
      <SyntaxErrorsListElementDanger
        $labelInfoColour={
          error.danger === CompilerSyntaxIssues.ERROR_LEVEL ? ERROR_COLOUR : WARNING_COLOUR
        }>
        {error.danger}
      </SyntaxErrorsListElementDanger>
      {typeof error.labelIndex !== 'number' ? ` <${error.labelIndex}>` : ''} :{' '}
      <strong>{error.problemType}</strong>.
    </SyntaxErrorsListElement>
  ));

  return (
    <>
      {ifOpenErrors && (
        <SyntaxErrorsInfoContainer>
          {errors.length > 0 && (
            <>
              <SyntaxErrorsInfoHeader>Compiling problems:</SyntaxErrorsInfoHeader>
              <SyntaxErrorsUnorderedList>{generateErrorsList}</SyntaxErrorsUnorderedList>
            </>
          )}
          {errors.length === 0 && <SyntaxNonErrorsComponent />}
        </SyntaxErrorsInfoContainer>
      )}
    </>
  );
};

export { SyntaxErrorInfoComponent };
