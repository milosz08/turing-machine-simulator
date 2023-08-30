/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: change-code-tracking.component.tsx
 *   Created at: 2023-08-01, 19:18:22
 *   Last updated at: 2023-08-30, 18:44:22
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
import { useDispatch, useSelector } from 'react-redux';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineChangeAdditionalValuesContainer } from '../additional-controls.styles';

const CheckboxTogglerComponent = React.lazy(
  () => import('~/app-components/checkbox-toggler/checkbox-toggler.component')
);

const ChangeCodeTrackingComponent: React.FC = (): JSX.Element => {
  const { disabledControls }: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { ifCodeFollow }: IPreferencesStoreReduxState = useSelector(
    (state: RootState) => state.preferences
  );

  const dispatcher = useDispatch();

  const handleChangeFollowingCode = (): void => {
    dispatcher(PrefAction.toggleCodeFollowAction());
  };

  return (
    <MachineChangeAdditionalValuesContainer $content="code tracking">
      <CheckboxTogglerComponent
        leftContent="off"
        rightContent="on"
        checked={ifCodeFollow}
        changeCallback={handleChangeFollowingCode}
        disabledItem={disabledControls.initialInput}
      />
    </MachineChangeAdditionalValuesContainer>
  );
};

export default ChangeCodeTrackingComponent;
