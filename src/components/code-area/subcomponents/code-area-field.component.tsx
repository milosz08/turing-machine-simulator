/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: code-area-field.component.tsx
 *   Created at: 2023-08-01, 19:58:21
 *   Last updated at: 2023-08-30, 18:43:10
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
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CodeAreaContext } from '~/app-components/code-area/code-area.component';
import {
  CodeAreaFieldTextarea,
  CodeAreaFieldWrapper,
} from '~/app-components/code-area/code-area.styles';
import * as MachineAction from '~/app-redux/machine-store/actions';
import { IMachineStoreReduxState } from '~/app-redux/machine-store/state';
import * as PrefAction from '~/app-redux/preferences-store/actions';
import { RootState } from '~/app-redux/redux-store';
import { AdditionalMessages } from '~/app-utils/machine-messages';
import { MachineModes } from '~/app-utils/machine-modes';

const CodeAreaFieldComponent: React.FC = (): JSX.Element => {
  const stateMach: IMachineStoreReduxState = useSelector(
    (state: RootState) => state.machine
  );
  const { areaRef } =
    useContext<Partial<{ areaRef: React.MutableRefObject<any> }>>(
      CodeAreaContext
    );

  const { rawCodeAreaInput, disabledControls, machineState } = stateMach;
  const dispatcher = useDispatch();

  const handleCompileCodeArea = (): void => {
    dispatcher(MachineAction.compileCodeAreaAction());
  };

  const handleInsertSourceCode = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatcher(
      MachineAction.insertSourceCodeAction({ sourceCode: target.value })
    );
  };

  const handleOnScrollTextarea = (): void => {
    dispatcher(
      PrefAction.changeCodeAreaScrollPosAction({
        scrollPos: Number(areaRef.current.scrollTop),
      })
    );
  };

  const handleTextFieldActive = (isEventIsFocus: boolean): void => {
    if (isEventIsFocus) {
      dispatcher(MachineAction.disableAllControlButtonsAction());
    } else {
      dispatcher(PrefAction.calculateCursorPosAction({ areaRef }));
    }
  };

  return (
    <CodeAreaFieldWrapper>
      <CodeAreaFieldTextarea
        $scrollDisabled={machineState === MachineModes.RUNNING}
        placeholder={AdditionalMessages.CODE_AREA_PLACEHOLDER}
        ref={areaRef}
        value={rawCodeAreaInput}
        onBlur={handleCompileCodeArea}
        onChange={handleInsertSourceCode}
        onScroll={handleOnScrollTextarea}
        onFocus={() => handleTextFieldActive(true)}
        onClick={() => handleTextFieldActive(false)}
        onKeyDown={() => handleTextFieldActive(false)}
        disabled={disabledControls.initialInput}
      />
    </CodeAreaFieldWrapper>
  );
};

export default CodeAreaFieldComponent;
