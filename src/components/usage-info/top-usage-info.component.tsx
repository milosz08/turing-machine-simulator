/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: top-usage-info.component.tsx
 *   Created at: 2023-08-01, 02:02:19
 *   Last updated at: 2023-08-30, 17:54:51
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
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Header2 } from '~/app-styles/mixins-styles';
import {
  InfoComponentContainer,
  InfoComponentHeader,
  InfoComponentListElement,
  InfoComponentOrderedList,
} from './usage-info.styles';

const TopUsageInfoComponent: React.FC = (): JSX.Element => (
  <InfoComponentContainer>
    <Header2>Basic usage:</Header2>
    <InfoComponentHeader>
      This is a deterministic, single-tape Turing machine simulator written in
      TypeScript with ReactJS library. To start using the machine you should:
    </InfoComponentHeader>
    <InfoComponentOrderedList>
      <InfoComponentListElement>
        Load a sample program from the list or create your own (if you
        don&apos;t know the syntax, see below the page).
      </InfoComponentListElement>
      <InfoComponentListElement>
        Enter the initial state label and the initial tape value in the
        &apos;initial input&apos; and &apos;initial state&apos; fields
        respectively.
      </InfoComponentListElement>
      <InfoComponentListElement>
        Compile the program (manually with the button or automatically by
        clicking on any field outside the code area).
      </InfoComponentListElement>
      <InfoComponentListElement>
        If the compilation is successful, reset the tape and print head settings
        using the &apos;Machine Reset&apos; button. If the compilation fails,
        correct all errors (you will see them if you click on the bottom colored
        bar of the code area).
      </InfoComponentListElement>
      <InfoComponentListElement>
        Click <FaPlay /> to start the machine operation. You can also click the
        &apos;Run at full speed&apos; button (not recommended on slow computers)
        or go step by &apos;step&apos; using the <FaStepBackward /> and{' '}
        <FaStepForward /> buttons.
      </InfoComponentListElement>
    </InfoComponentOrderedList>
  </InfoComponentContainer>
);

export default TopUsageInfoComponent;
