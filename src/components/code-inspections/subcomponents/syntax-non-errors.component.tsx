/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: syntax-non-errors.component.tsx
 *   Created at: 2023-08-01, 21:02:57
 *   Last updated at: 2023-08-30, 18:42:23
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
