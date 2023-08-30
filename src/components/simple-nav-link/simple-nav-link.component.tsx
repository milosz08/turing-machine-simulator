/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: simple-nav-link.component.tsx
 *   Created at: 2023-08-01, 01:08:21
 *   Last updated at: 2023-08-30, 18:36:37
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
import type { JSX, ReactNode } from 'react';
import { SimpleNavLinkContainer } from './simple-nav-link.styles';

type Props = {
  link: string;
  children: ReactNode;
  selfPage?: boolean;
  clickHandler?: () => void;
};

const SimpleNavLinkComponent: React.FC<Props> = ({
  link,
  children,
  selfPage,
  clickHandler,
}): JSX.Element => (
  <SimpleNavLinkContainer
    href={link}
    target={selfPage ? '_self' : '_blank'}
    onClick={clickHandler}>
    {children}
  </SimpleNavLinkContainer>
);

export default SimpleNavLinkComponent;
