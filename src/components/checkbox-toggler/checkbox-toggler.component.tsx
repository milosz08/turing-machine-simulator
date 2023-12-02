/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
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
      <CheckboxToggleAsideLeftAndRight>
        {leftContent}
      </CheckboxToggleAsideLeftAndRight>
    )}
    <CheckboxToggleInput
      type="checkbox"
      id={`checkboxToggle_${leftContent}_${rightContent}`}
      checked={checked}
      onChange={changeCallback}
      disabled={Boolean(disabledItem)}
    />
    <CheckboxToggleLabel
      htmlFor={`checkboxToggle_${leftContent}_${rightContent}`}>
      <CheckboxToggleStyledInput />
    </CheckboxToggleLabel>
    {rightContent && (
      <CheckboxToggleAsideLeftAndRight>
        {rightContent}
      </CheckboxToggleAsideLeftAndRight>
    )}
  </CheckboxToggleElementContainer>
);

export default CheckboxTogglerComponent;
