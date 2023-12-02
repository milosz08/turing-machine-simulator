/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { createGlobalStyle } from 'styled-components';
import { DarkThemeType, LightThemeType } from './theme-styles';

export const GlobalStyles = createGlobalStyle<{
  theme: LightThemeType | DarkThemeType;
}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    color: ${({ theme }) => theme.TEXT};
    background-color: ${({ theme }) => theme.BODY};
    display: flex;
    flex-direction: column;
  }
  body, input, button, textarea {
    font-family: "JetBrains Mono", sans-serif;
  }
  #app-mount {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 1360px;
    min-height: 100vh;
  }
  main {
    flex-grow: 1;
  }
`;
