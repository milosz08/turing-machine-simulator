/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: redux-store-wrapper.component.tsx
 *   Created at: 2023-08-01, 00:55:54
 *   Last updated at: 2023-08-30, 18:31:11
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
import { Provider } from 'react-redux';
import { reduxStore } from '~/app-redux/redux-store';
import EntrypointPageComponent from '~/app-router/entrypoint-page.component';

const ReduxStoreWrapperComponent: React.FC = (): JSX.Element => (
  <Provider store={reduxStore}>
    <EntrypointPageComponent />
  </Provider>
);

export default ReduxStoreWrapperComponent;
