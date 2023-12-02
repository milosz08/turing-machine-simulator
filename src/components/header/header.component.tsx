/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { HeaderContainer } from './header.styles';

const HeaderLeftNavComponent = React.lazy(
  () => import('./subcomponents/header-left-nav.component')
);
const HeaderCenterTitleComponent = React.lazy(
  () => import('./subcomponents/header-center-title.component')
);
const HeaderRightNavComponent = React.lazy(
  () => import('./subcomponents/header-right-nav.component')
);

const HeaderComponent: React.FC = (): JSX.Element => (
  <HeaderContainer>
    <HeaderLeftNavComponent />
    <HeaderCenterTitleComponent />
    <HeaderRightNavComponent />
  </HeaderContainer>
);

export default HeaderComponent;
