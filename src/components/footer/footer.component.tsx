/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: footer.component.tsx
 *   Created at: 2023-07-31, 23:36:19
 *   Last updated at: 2023-08-30, 18:40:46
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
import {
  FooterContainer,
  FooterCopyInfo,
  FooterSeparator,
} from './footer.styles';

const FooterComponent: React.FC = (): JSX.Element => {
  const currYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSeparator />
      <FooterCopyInfo>&copy; {currYear} by Miłosz Gilga.</FooterCopyInfo>
    </FooterContainer>
  );
};

export default FooterComponent;
