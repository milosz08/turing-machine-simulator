/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { createContext, useRef } from 'react';
import { CodeAreaContainer, CodeAreaWrapper } from './code-area.styles';

const CodeAreaRowsComponent = React.lazy(
  () => import('./subcomponents/code-area-rows.component')
);
const CodeAreaFieldComponent = React.lazy(
  () => import('./subcomponents/code-area-field.component')
);
const CodeInspectionsComponent = React.lazy(
  () => import('~/app-components/code-inspections/code-inspections.component')
);
const SyntaxErrorInfoComponent = React.lazy(
  () =>
    import(
      '~/app-components/code-inspections/subcomponents/syntax-error-info.component'
    )
);

export const CodeAreaContext = createContext<
  Partial<{ areaRef: React.MutableRefObject<any> }>
>({});

const CodeAreaComponent: React.FC = (): JSX.Element => {
  const areaRef = useRef<HTMLElement | null>(null);

  return (
    <CodeAreaContainer>
      <CodeAreaContext.Provider value={{ areaRef }}>
        <CodeAreaWrapper>
          <CodeAreaRowsComponent />
          <CodeAreaFieldComponent />
        </CodeAreaWrapper>
        <CodeInspectionsComponent />
        <SyntaxErrorInfoComponent />
      </CodeAreaContext.Provider>
    </CodeAreaContainer>
  );
};

export default CodeAreaComponent;
