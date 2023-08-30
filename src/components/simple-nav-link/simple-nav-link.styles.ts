/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: simple-nav-link.styles.ts
 *   Created at: 2023-08-01, 01:08:30
 *   Last updated at: 2023-08-30, 18:36:44
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
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { a_rs } from '~/app-styles/reset-styles';

export const SimpleNavLinkContainer = styled(a_rs)`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
`;

export const ReactNavLinkContainer = styled(NavLink)`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
