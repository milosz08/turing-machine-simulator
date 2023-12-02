/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
