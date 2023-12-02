/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import SyntaxInfoComponent from '~/app-components/usage-info/syntax-info.component';
import TopUsageInfoComponent from '~/app-components/usage-info/top-usage-info.component';

const UsageInfoPageComponent: React.FC = (): JSX.Element => (
  <>
    <TopUsageInfoComponent />
    <SyntaxInfoComponent />
  </>
);

export default UsageInfoPageComponent;
