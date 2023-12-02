/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { ReactNavLinkContainer } from '~/app-components/simple-nav-link/simple-nav-link.styles';
import { HeaderSingleNavContainer } from '../header.styles';

const HeaderRightNavComponent: React.FC = (): JSX.Element => (
  <HeaderSingleNavContainer>
    <ReactNavLinkContainer to="/usage-info">
      Usage info and syntax
    </ReactNavLinkContainer>
    <ReactNavLinkContainer to="/libraries">Libraries</ReactNavLinkContainer>
  </HeaderSingleNavContainer>
);

export default HeaderRightNavComponent;
