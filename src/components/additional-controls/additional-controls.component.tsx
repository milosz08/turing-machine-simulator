/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { AdditionalControlsContainer } from './additional-controls.styles';
import ChangeCodeTrackingComponent from './subcomponents/change-code-tracking.component';
import ChangeHeadSpeedComponent from './subcomponents/change-head-speed.component';
import CompileButtonComponent from './subcomponents/compile-button.component';

const AdditionalControlsComponent: React.FC = (): JSX.Element => (
  <AdditionalControlsContainer>
    <ChangeCodeTrackingComponent />
    <CompileButtonComponent />
    <ChangeHeadSpeedComponent />
  </AdditionalControlsContainer>
);

export default AdditionalControlsComponent;
