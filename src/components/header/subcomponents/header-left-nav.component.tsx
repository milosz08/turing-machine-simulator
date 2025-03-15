import type { JSX } from 'react';
import * as React from 'react';
import { SimpleNavLinkComponent } from '@/components/simple-nav-link/simple-nav-link.component';
import { HeaderSingleNavContainer } from '../header.styles';

const HeaderLeftNavComponent: React.FC = (): JSX.Element => (
  <HeaderSingleNavContainer>
    <SimpleNavLinkComponent link="https://en.wikipedia.org/wiki/Turing_machine">
      About Turing Machine
    </SimpleNavLinkComponent>
    <SimpleNavLinkComponent link="https://github.com/milosz08/turing-machine-simulator">
      Source Code
    </SimpleNavLinkComponent>
  </HeaderSingleNavContainer>
);

export { HeaderLeftNavComponent };
