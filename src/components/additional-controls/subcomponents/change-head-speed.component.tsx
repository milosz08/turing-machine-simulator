/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: change-head-speed.component.tsx
 * Last modified: 8/1/23, 7:18 PM
 * Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import * as React from "react";
import type { JSX } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeadSpeed } from "~/app-utils/head-speed";
import { RootState } from "~/app-redux/redux-store";
import { IMachineStoreReduxState } from "~/app-redux/machine-store/state";

import * as PrefAction from "~/app-redux/preferences-store/actions";

import { MachineChangeAdditionalValuesContainer, MachineChangeHeadSpeedRangeInput } from "../additional-controls.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ChangeHeadSpeedComponent: React.FC = (): JSX.Element => {

    const { disabledControls }: IMachineStoreReduxState = useSelector((state: RootState) => state.machine);
    const { MIN, MAX } = HeadSpeed;

    const [ speed, setSpeed ] = useState<number>(MAX);
    const dispatcher = useDispatch();

    const handleChangeHeadSpeed = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setSpeed(Number(target.value));
        dispatcher(PrefAction.changeHeadSpeedAction({ rawHeadSpeed: target.valueAsNumber }));
    };

    return (
        <MachineChangeAdditionalValuesContainer
            $content="head speed"
        >
            <MachineChangeHeadSpeedRangeInput
                type="range"
                value={speed}
                min={MIN}
                max={MAX}
                onChange={handleChangeHeadSpeed}
                disabled={disabledControls.initialInput}
            />
        </MachineChangeAdditionalValuesContainer>
    );
};

export default ChangeHeadSpeedComponent;
