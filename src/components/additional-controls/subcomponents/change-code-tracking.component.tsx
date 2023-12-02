/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxTogglerComponent from '~/app-components/checkbox-toggler/checkbox-toggler.component';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '~/app-redux/preferences-store/state';
import { RootState } from '~/app-redux/redux-store';
import { MachineChangeAdditionalValuesContainer } from '../additional-controls.styles';

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
