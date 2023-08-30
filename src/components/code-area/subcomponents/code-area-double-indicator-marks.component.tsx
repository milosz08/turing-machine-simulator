/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: code-area-double-indicator-marks.component.tsx
 *   Created at: 2023-08-01, 19:58:11
 *   Last updated at: 2023-08-30, 18:43:03
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
  CodeAreaSingleRowDualHighlighterBottom,
  CodeAreaSingleRowDualIHighlighter,
  CodeAreaSingleRowIndicator,
  CodeAreaSingleRowIndicatorDualBottom,
  CodeAreaSingleRowLineNumber,
} from '../code-area.styles';

type Props = {
  iteration: number;
};

const CodeAreaDoubleIndicatorMarksComponent: React.FC<Props> = ({
  iteration,
}): JSX.Element => (
  <CodeAreaSingleRowContainer>
    <CodeAreaSingleRowLineNumber>{iteration + 1}</CodeAreaSingleRowLineNumber>
    <CodeAreaSingleRowDualIHighlighter />
    <CodeAreaSingleRowDualHighlighterBottom />
    <CodeAreaSingleRowIndicator $prev={true} $next={false}>
      prev
    </CodeAreaSingleRowIndicator>
    <CodeAreaSingleRowIndicatorDualBottom $prev={false} $next={true}>
      next
    </CodeAreaSingleRowIndicatorDualBottom>
  </CodeAreaSingleRowContainer>
);

export default CodeAreaDoubleIndicatorMarksComponent;