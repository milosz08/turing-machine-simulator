/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: checkbox-toggler.component.tsx
 *   Created at: 2023-08-01, 01:00:22
 *   Last updated at: 2023-08-30, 18:43:57
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
