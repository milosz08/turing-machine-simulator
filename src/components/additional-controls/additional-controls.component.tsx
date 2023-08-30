/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: additional-controls.component.tsx
 *   Created at: 2023-08-01, 19:14:28
 *   Last updated at: 2023-08-30, 18:44:37
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
import { AdditionalControlsContainer } from './additional-controls.styles';

const ChangeCodeTrackingComponent = React.lazy(
  () => import('./subcomponents/change-code-tracking.component')
);
const ChangeHeadSpeedComponent = React.lazy(
  () => import('./subcomponents/change-head-speed.component')
);
const CompileButtonComponent = React.lazy(
  () => import('./subcomponents/compile-button.component')
);

const AdditionalControlsComponent: React.FC = (): JSX.Element => (
  <AdditionalControlsContainer>
    <ChangeCodeTrackingComponent />
    <CompileButtonComponent />
    <ChangeHeadSpeedComponent />
  </AdditionalControlsContainer>
);

export default AdditionalControlsComponent;
