/*
 * Copyright (c) 2023 by MILOSZ GILGA <http://miloszgilga.pl>
 *
 * File name: top-usage-info.component.tsx
 * Last modified: 8/1/23, 2:02 AM
 * Project name: turing-machine-simulator
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

import * as React from "react";
import type { JSX } from "react";

import { Header2 } from "~/app-styles/mixins-styles";
import {
    InfoComponentCenterBlockContent, InfoComponentContainer, InfoComponentHeader,
    InfoComponentListElement, InfoComponentUnorderedList
} from "./usage-info.styles";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SyntaxInfoComponent: React.FC = (): JSX.Element => (
    <InfoComponentContainer>
        <Header2>Machine syntax:</Header2>
        <InfoComponentHeader>
            Compiler syntax information:
        </InfoComponentHeader>
        <InfoComponentUnorderedList>
            <InfoComponentListElement>
                Each command line for a machine should contain the following consecutive directives:
                <InfoComponentCenterBlockContent>
                    {"<current state>, <current symbol>, <new symbol>, <direction>, <new state>, <terminate>"}
                </InfoComponentCenterBlockContent>
                where the first four labels are mandatory. The last one, on the other hand, is optional and is used
                to immediately pause the machine after it is done.
            </InfoComponentListElement>
            <InfoComponentListElement>
                You can use any word, number, or string in {"<current state> and <new state>"} labels. However, convention
                dictates that you start the label with a 'q' and don't make them too long. You shouldn't name a label if
                it would consist of only one of these characters: '#', '*', '_' or ' '.
            </InfoComponentListElement>
            <InfoComponentListElement>
                The {"<current symbol> and <new symbol>"} labels read and write the symbol to the tape. You can use almost
                all available symbols. The machine takes into account the case of the letters in the symbols. The only
                symbols you cannot use are '*', '_', '#' and ' '. These are reserved for: '*' in {"<current symbol>"} reads
                any character from the tape, in {"<new symbol>"} leaves the same symbol on the tape; '_' is responsible
                for the empty character (space).
            </InfoComponentListElement>
            <InfoComponentListElement>
                The {"<direction>"} label should contain the characters: {"'>'"}, {"'<'"} or '*', which respectively move the
                head to the right, left, or do not move the head (it stays in its original position).
            </InfoComponentListElement>
            <InfoComponentListElement>
                Comments can be placed after the '#' sign. Anything after this character will be ignored in the
                compilation and machine reading of the code.
            </InfoComponentListElement>
            <InfoComponentListElement>
                It is recommended to add an end label of the form: {"'<current state> -stop'"}, for example: q1-stop. This
                is not required to compile the program correctly, but it will prevent unexpected program behavior.
            </InfoComponentListElement>
            <InfoComponentListElement>
                The last label {"<terminate>"} is optional and may be used to pause program immediately after
                execution of this label, for example: 'q1 _ * {">"} q2 !'.
            </InfoComponentListElement>
            <InfoComponentListElement>
                When saving a program to a file, you can save the initial state value of the machine. To do this use the
                following tuple in your code: '### {"<optional text> $<initial tape value>$"}', for example: '### Initial
                input: $101001001$'.
            </InfoComponentListElement>
        </InfoComponentUnorderedList>
    </InfoComponentContainer>
);

export default SyntaxInfoComponent;
