/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: third-party-libraries.component.tsx
 *   Created at: 2023-08-01, 02:13:47
 *   Last updated at: 2023-08-30, 18:35:49
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
import { Header2 } from '~/app-styles/mixins-styles';
import { thirdPartyLibrariesData } from '~/app-utils/third-party-libraries-data';
import {
  ThirdPartyLibrariesContainer,
  ThirdPartyLibrariesList,
  ThirdPartyLibrariesListElement,
  ThirdPartyLibraryLink,
} from './third-party-libraries.styles';

const ThirdPartyLibrariesComponent: React.FC = (): JSX.Element => {
  const generatedLibraries: JSX.Element[] = thirdPartyLibrariesData
    .sort((x, y) => x.name.localeCompare(y.name))
    .map(({ name, githubSlug }) => (
      <ThirdPartyLibrariesListElement key={name}>
        <ThirdPartyLibraryLink
          href={`https://github.com/${githubSlug}`}
          target="_blank">
          {name}
        </ThirdPartyLibraryLink>
      </ThirdPartyLibrariesListElement>
    ));

  return (
    <ThirdPartyLibrariesContainer>
      <Header2>3rd party libraries ({thirdPartyLibrariesData.length}):</Header2>
      <ThirdPartyLibrariesList>{generatedLibraries}</ThirdPartyLibrariesList>
    </ThirdPartyLibrariesContainer>
  );
};

export default ThirdPartyLibrariesComponent;
