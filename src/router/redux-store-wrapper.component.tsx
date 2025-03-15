import type { JSX } from 'react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from '@/redux/redux-store';
import { EntrypointPageComponent } from '@/router/entrypoint-page.component';

const ReduxStoreWrapperComponent: React.FC = (): JSX.Element => (
  <Provider store={reduxStore}>
    <EntrypointPageComponent />
  </Provider>
);

export { ReduxStoreWrapperComponent };
