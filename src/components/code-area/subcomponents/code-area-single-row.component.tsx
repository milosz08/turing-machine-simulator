/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
