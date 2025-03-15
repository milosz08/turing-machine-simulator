import type { JSX } from 'react';
import * as React from 'react';
import { SyntaxErrorsListElement, SyntaxErrorsUnorderedList } from '../code-inspections.styles';

const SyntaxNonErrorsComponent: React.FC = (): JSX.Element => (
  <SyntaxErrorsUnorderedList>
    <SyntaxErrorsListElement>None problems</SyntaxErrorsListElement>
  </SyntaxErrorsUnorderedList>
);

export { SyntaxNonErrorsComponent };
