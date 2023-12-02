/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import {
  SyntaxErrorsListElement,
  SyntaxErrorsUnorderedList,
} from '../code-inspections.styles';

const SyntaxNonErrorsComponent: React.FC = (): JSX.Element => (
  <SyntaxErrorsUnorderedList>
    <SyntaxErrorsListElement>None problems</SyntaxErrorsListElement>
  </SyntaxErrorsUnorderedList>
);

export default SyntaxNonErrorsComponent;
