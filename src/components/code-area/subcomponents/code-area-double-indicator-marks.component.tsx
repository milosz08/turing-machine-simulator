/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
