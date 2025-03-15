import type { JSX } from 'react';
import * as React from 'react';
import { createContext, useRef } from 'react';
import { CodeInspectionsComponent } from '@/components/code-inspections/code-inspections.component';
import { SyntaxErrorInfoComponent } from '@/components/code-inspections/subcomponents/syntax-error-info.component';
import { CodeAreaContainer, CodeAreaWrapper } from './code-area.styles';
import { CodeAreaFieldComponent } from './subcomponents/code-area-field.component';
import { CodeAreaRowsComponent } from './subcomponents/code-area-rows.component';

export const CodeAreaContext = createContext<Partial<{ areaRef: React.MutableRefObject<any> }>>({});

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

export { CodeAreaComponent };
