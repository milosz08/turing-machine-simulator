/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: header-left-nav.component.tsx
 *   Created at: 2023-08-01, 00:58:41
 *   Last updated at: 2023-08-30, 18:40:08
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
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
