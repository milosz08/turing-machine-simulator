/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { useRoutes } from 'react-router-dom';

const RootPageComponent = React.lazy(
  () => import('~/app-pages/root-page.component')
);
const LibrariesPageComponent = React.lazy(
  () => import('~/app-pages/libraries-page.component')
);
const UsageInfoPageComponent = React.lazy(
  () => import('~/app-pages/usage-info-page.component')
);

const RouterComponent: React.FC = (): JSX.Element => {
  return useRoutes([
    { path: '/', element: <RootPageComponent /> },
    { path: '/usage-info', element: <UsageInfoPageComponent /> },
    { path: '/libraries', element: <LibrariesPageComponent /> },
  ]);
};

export default RouterComponent;
