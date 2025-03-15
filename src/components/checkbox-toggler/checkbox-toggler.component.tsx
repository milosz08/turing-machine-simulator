import type { JSX } from 'react';
import * as React from 'react';
import {
  CheckboxToggleAsideLeftAndRight,
  CheckboxToggleElementContainer,
  CheckboxToggleInput,
  CheckboxToggleLabel,
  CheckboxToggleStyledInput,
} from './checkbox-toggler.styles';

type Props = {
  leftContent?: string;
  rightContent?: string;
  checked: boolean;
  changeCallback: () => void;
  disabledItem?: boolean;
};

const CheckboxTogglerComponent: React.FC<Props> = ({
  leftContent,
  rightContent,
  checked,
  changeCallback,
  disabledItem,
}): JSX.Element => (
  <CheckboxToggleElementContainer>
    {leftContent && (
      <CheckboxToggleAsideLeftAndRight>{leftContent}</CheckboxToggleAsideLeftAndRight>
    )}
    <CheckboxToggleInput
      type="checkbox"
      id={`checkboxToggle_${leftContent}_${rightContent}`}
      checked={checked}
      onChange={changeCallback}
      disabled={Boolean(disabledItem)}
    />
    <CheckboxToggleLabel htmlFor={`checkboxToggle_${leftContent}_${rightContent}`}>
      <CheckboxToggleStyledInput />
    </CheckboxToggleLabel>
    {rightContent && (
      <CheckboxToggleAsideLeftAndRight>{rightContent}</CheckboxToggleAsideLeftAndRight>
    )}
  </CheckboxToggleElementContainer>
);

export { CheckboxTogglerComponent };
