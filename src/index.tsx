/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import * as ReactDOM from 'react-dom/client';
import ReduxStoreWrapperComponent from '~/app-router/redux-store-wrapper.component';

ReactDOM.createRoot(document.getElementById('app-mount')).render(
  <ReduxStoreWrapperComponent />
);
