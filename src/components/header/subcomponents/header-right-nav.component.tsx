import type { JSX } from 'react';
import * as React from 'react';
import { SimpleNavLinkComponent } from '@/components/simple-nav-link/simple-nav-link.component';
import { ReactNavLinkContainer } from '@/components/simple-nav-link/simple-nav-link.styles';
import { HeaderSingleNavContainer } from '../header.styles';

const HeaderRightNavComponent: React.FC = (): JSX.Element => (
  <HeaderSingleNavContainer>
    <ReactNavLinkContainer to="/usage-info">Usage info and syntax</ReactNavLinkContainer>
    <SimpleNavLinkComponent link="https://miloszgilga.pl/project/turing-machine-simulator">
      About project
    </SimpleNavLinkComponent>
  </HeaderSingleNavContainer>
);

export { HeaderRightNavComponent };
