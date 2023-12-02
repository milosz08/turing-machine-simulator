/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as React from 'react';
import type { JSX } from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from '~/app-redux/redux-store';
import EntrypointPageComponent from '~/app-router/entrypoint-page.component';

const ReduxStoreWrapperComponent: React.FC = (): JSX.Element => (
  <Provider store={reduxStore}>
    <EntrypointPageComponent />
  </Provider>
);

export default ReduxStoreWrapperComponent;
