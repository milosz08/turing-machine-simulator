import type { JSX } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxTogglerComponent } from '@/components/checkbox-toggler/checkbox-toggler.component';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import * as PrefAction from '@/redux/preferences-store/actions';
import { IPreferencesStoreReduxState } from '@/redux/preferences-store/state';
import { RootState } from '@/redux/redux-store';
import { MachineChangeAdditionalValuesContainer } from '../additional-controls.styles';

const ChangeCodeTrackingComponent: React.FC = (): JSX.Element => {
  const { disabledControls }: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { ifCodeFollow }: Partial<IPreferencesStoreReduxState> = useSelector(
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

export { ChangeCodeTrackingComponent };
