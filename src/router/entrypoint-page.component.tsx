import type { JSX } from 'react';
import * as React from 'react';
import { Suspense, createContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { FooterComponent } from '@/components/footer/footer.component';
import { HeaderComponent } from '@/components/header/header.component';
import { SuspenseLoaderComponent } from '@/components/suspense-loader/suspense-loader.component';
import { useDarkMode } from '@/hooks/use-dark-mode';
import { useMachineSequencer } from '@/hooks/use-machine-sequencer';
import { useOnLoad } from '@/hooks/use-on-load';
import { RouterComponent } from '@/router/router.component';
import { GlobalStyles } from '@/styles/global-styles';
import { Themes } from '@/styles/theme-styles';
import { ThemeModes } from '@/utils/theme-modes';
import { ThemeProvider } from 'styled-components';

export const ThemeModeContext = createContext<Partial<{ changeTheme: () => void }>>({});

const EntrypointPageComponent: React.FC = (): JSX.Element => {
  const [theme, themeToggle] = useDarkMode();
  const styledTheme = theme === ThemeModes.LIGHT ? Themes.darkTheme : Themes.lightTheme;

  useOnLoad();
  useMachineSequencer();

  return (
    <React.StrictMode>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyles theme={styledTheme} />
        <Suspense fallback={<SuspenseLoaderComponent />}>
          <HashRouter>
            <ThemeModeContext.Provider value={{ changeTheme: themeToggle }}>
              <HeaderComponent />
            </ThemeModeContext.Provider>
            <main>
              <RouterComponent />
            </main>
            <FooterComponent />
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export { EntrypointPageComponent };
