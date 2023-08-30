/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: entrypoint-page.component.tsx
 *   Created at: 2023-07-31, 23:27:47
 *   Last updated at: 2023-08-30, 18:30:40
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
import { Suspense, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SuspenseLoaderComponent from '~/app-components/suspense-loader/suspense-loader.component';
import useDarkMode from '~/app-hooks/use-dark-mode';
import useMachineSequencer from '~/app-hooks/use-machine-sequencer';
import useOnLoad from '~/app-hooks/use-on-load';
import { GlobalStyles } from '~/app-styles/global-styles';
import Themes from '~/app-styles/theme-styles';
import { ThemeModes } from '~/app-utils/theme-modes';

const RouterComponent = React.lazy(
  () => import('~/app-router/router.component')
);
const HeaderComponent = React.lazy(
  () => import('~/app-components/header/header.component')
);
const FooterComponent = React.lazy(
  () => import('~/app-components/footer/footer.component')
);

export const ThemeModeContext = createContext<
  Partial<{ changeTheme: () => void }>
>({});

const EntrypointPageComponent: React.FC = (): JSX.Element => {
  const [theme, themeToggle] = useDarkMode();
  const styledTheme =
    theme === ThemeModes.LIGHT ? Themes.darkTheme : Themes.lightTheme;

  useOnLoad();
  useMachineSequencer();

  return (
    <React.StrictMode>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyles theme={styledTheme} />
        <Suspense fallback={<SuspenseLoaderComponent />}>
          <BrowserRouter>
            <ThemeModeContext.Provider value={{ changeTheme: themeToggle }}>
              <HeaderComponent />
            </ThemeModeContext.Provider>
            <main>
              <RouterComponent />
            </main>
            <FooterComponent />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default EntrypointPageComponent;
