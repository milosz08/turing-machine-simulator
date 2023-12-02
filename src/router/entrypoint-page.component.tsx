/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
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
