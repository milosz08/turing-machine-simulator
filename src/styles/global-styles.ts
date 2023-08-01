/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: global-styles.ts
 * Last modified: 8/1/23, 12:05 AM
 * Project name: react-ts-turing-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *     <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
 */

import { createGlobalStyle } from "styled-components";
import { DarkThemeType, LightThemeType } from "./theme-styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const GlobalStyles = createGlobalStyle<{ theme: LightThemeType | DarkThemeType }>`
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
