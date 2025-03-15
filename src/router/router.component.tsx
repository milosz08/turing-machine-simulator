import type { JSX } from 'react';
import * as React from 'react';
import { useRoutes } from 'react-router-dom';

const RootPageComponent = React.lazy(() => import('@/pages/root-page.component'));
const UsageInfoPageComponent = React.lazy(() => import('@/pages/usage-info-page.component'));

const RouterComponent: React.FC = (): JSX.Element => {
  return useRoutes([
    { path: '/', element: <RootPageComponent /> },
    { path: '/usage-info', element: <UsageInfoPageComponent /> },
  ]);
};

export { RouterComponent };
