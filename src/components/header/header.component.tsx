/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { HeaderContainer } from './header.styles';
import HeaderCenterTitleComponent from './subcomponents/header-center-title.component';
import HeaderLeftNavComponent from './subcomponents/header-left-nav.component';
import HeaderRightNavComponent from './subcomponents/header-right-nav.component';

const HeaderComponent: React.FC = (): JSX.Element => (
  <HeaderContainer>
    <HeaderLeftNavComponent />
    <HeaderCenterTitleComponent />
    <HeaderRightNavComponent />
  </HeaderContainer>
);

export default HeaderComponent;
