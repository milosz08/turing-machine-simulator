/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';

const TopUsageInfoComponent = React.lazy(
  () => import('~/app-components/usage-info/top-usage-info.component')
);
const SyntaxInfoComponent = React.lazy(
  () => import('~/app-components/usage-info/syntax-info.component')
);

const UsageInfoPageComponent: React.FC = (): JSX.Element => (
  <>
    <TopUsageInfoComponent />
    <SyntaxInfoComponent />
  </>
);

export default UsageInfoPageComponent;
