/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: load-example-program.styles.ts
 *   Created at: 2023-08-01, 21:32:44
 *   Last updated at: 2023-08-30, 18:39:46
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
import { MachineControlButton } from '~/app-components/machine-controls/machine-controls.styles';
import { NonChangeValues } from '~/app-styles/theme-styles';

export const LoadExamplesProgramContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  border: 1px solid ${NonChangeValues.BORDER_COLOUR};
  border-radius: 5px;
  width: 1300px;
  margin: 50px 0 30px 0;
  padding: 30px 0;
  &::after {
    position: absolute;
    content: 'example turing machine simulator programs';
    width: fit-content;
    top: -12px;
    padding: 0 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.TEXT};
    background-color: ${({ theme }) => theme.BODY};
    border: 3px solid ${({ theme }) => theme.BODY};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const LoadExamplesExampleProgramButton = styled(MachineControlButton)`
  width: fit-content;
`;
