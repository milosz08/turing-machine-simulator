/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { HeaderSingleNavContainer } from '../header.styles';

const SimpleNavLinkComponent = React.lazy(
  () => import('~/app-components/simple-nav-link/simple-nav-link.component')
);

const HeaderLeftNavComponent: React.FC = (): JSX.Element => (
  <HeaderSingleNavContainer>
    <SimpleNavLinkComponent link="https://en.wikipedia.org/wiki/Turing_machine">
      About Turing Machine
    </SimpleNavLinkComponent>
    <SimpleNavLinkComponent link="https://github.com/Milosz08/turing-machine-simulator">
      Source Code
    </SimpleNavLinkComponent>
  </HeaderSingleNavContainer>
);

export default HeaderLeftNavComponent;
