/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: suspense-loader.styles.ts
 *   Created at: 2023-08-01, 01:39:55
 *   Last updated at: 2023-08-30, 18:36:30
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

export const SuspenseLoaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.BODY};
`;

export const SuspenseLoaderSpinner = styled.div`
  width: 120px;
  height: 120px;
  &:after {
    content: ' ';
    display: block;
    width: 120px;
    height: 120px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
