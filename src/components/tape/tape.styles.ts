/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: tape.styles.ts
 *   Created at: 2023-08-01, 17:41:22
 *   Last updated at: 2023-08-30, 18:36:12
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
import { BorderElement } from '~/app-styles/mixins-styles';

export const TapeContainer = styled.section`
  ${({ theme }) =>
    BorderElement({
      _textColour: theme.TEXT,
      _bgcColour: theme.BODY,
      _content: 'machine tape',
    })};
  padding: 30px 0 50px 0;
  margin-top: 30px;
`;

export const TapeSingleCharacter = styled.span<{ $active: boolean }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  line-height: 1;
  width: 17px;
  height: 24px;
  font-size: 1.3rem;
  border-radius: 3px;
  font-weight: ${props =>
    props.$active
      ? props.theme.BUTTON_FONT_WEIGHT
      : props.theme.INPUT_FONT_WEIGHT};
  color: ${props => (props.$active ? props.theme.BODY : props.theme.TEXT)};
  background-color: ${props =>
    props.$active ? props.theme.TEXT : 'transparent'};
  &::before,
  &::after {
    position: absolute;
    display: ${props => (props.$active ? 'block' : 'none')};
    content: '';
    width: 0;
    height: 0;
    bottom: -17px;
  }
  &::before {
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.TEXT};
  }
  &::after {
    content: 'Head';
    width: 50px;
    height: 14px;
    bottom: -31px;
    font-size: 0.8rem;
    text-align: center;
    background-color: ${({ theme }) => theme.TEXT};
    color: ${({ theme }) => theme.BODY};
    font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;
