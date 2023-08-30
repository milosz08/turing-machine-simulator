/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: code-area-single-row.component.tsx
 *   Created at: 2023-08-01, 19:58:42
 *   Last updated at: 2023-08-30, 18:43:28
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
  CodeAreaSingleRowContainer,
  CodeAreaSingleRowHighlighter,
  CodeAreaSingleRowIndicator,
  CodeAreaSingleRowLineNumber,
} from '../code-area.styles';

type Props = {
  iterator: number;
  prev: boolean;
  next: boolean;
};

const CodeAreaSingleRowComponent: React.FC<Props> = ({
  iterator,
  prev,
  next,
}): JSX.Element => (
  <CodeAreaSingleRowContainer>
    <CodeAreaSingleRowIndicator $prev={prev} $next={next}>
      {prev ? 'prev' : 'next'}
    </CodeAreaSingleRowIndicator>
    <CodeAreaSingleRowLineNumber>{iterator + 1}</CodeAreaSingleRowLineNumber>
    <CodeAreaSingleRowHighlighter $prev={prev} $next={next} />
  </CodeAreaSingleRowContainer>
);

export default CodeAreaSingleRowComponent;
