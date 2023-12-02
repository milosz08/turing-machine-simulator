/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
