/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import {
  SyntaxErrorsInfoContainer,
  SyntaxErrorsInfoHeader,
  SyntaxErrorsListElement,
  SyntaxErrorsListElementDanger,
  SyntaxErrorsUnorderedList,
} from '~/app-components/code-inspections/code-inspections.styles';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { NonChangeValues } from '~/app-styles/theme-styles';
import { CompilerSyntaxIssues } from '~/app-utils/machine-messages';

const SyntaxNonErrorsComponent = React.lazy(
  () => import('../subcomponents/syntax-non-errors.component')
);

const SyntaxErrorInfoComponent: React.FC = (): JSX.Element => {
  const { machineTuples }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { ifOpenErrors }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const { errors } = machineTuples;
  const { ERROR_COLOUR, WARNING_COLOUR } = NonChangeValues;

  const generateErrorsList: JSX.Element[] = machineTuples.errors.map(
    (error: any) => (
      <SyntaxErrorsListElement
        key={`${error.problemType}__${error.lineIndex}__${error.labelIndex}`}>
        Ln {error.lineIndex}:{' '}
        <SyntaxErrorsListElementDanger
          $labelInfoColour={
            error.danger === CompilerSyntaxIssues.ERROR_LEVEL
              ? ERROR_COLOUR
              : WARNING_COLOUR
          }>
          {error.danger}
        </SyntaxErrorsListElementDanger>
        {typeof error.labelIndex !== 'number' ? ` <${error.labelIndex}>` : ''} :{' '}
        <strong>{error.problemType}</strong>.
      </SyntaxErrorsListElement>
    )
  );

  return (
    <>
      {ifOpenErrors && (
        <SyntaxErrorsInfoContainer>
          {errors.length > 0 && (
            <>
              <SyntaxErrorsInfoHeader>
                Compiling problems:
              </SyntaxErrorsInfoHeader>
              <SyntaxErrorsUnorderedList>
                {generateErrorsList}
              </SyntaxErrorsUnorderedList>
            </>
          )}
          {errors.length === 0 && <SyntaxNonErrorsComponent />}
        </SyntaxErrorsInfoContainer>
      )}
    </>
  );
};

export default SyntaxErrorInfoComponent;
