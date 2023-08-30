/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: footer.styles.ts
 *   Created at: 2023-08-01, 01:47:05
 *   Last updated at: 2023-08-30, 18:40:39
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
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const FooterSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.SEPARATOR};
`;

export const FooterCopyInfo = styled.p`
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
`;
