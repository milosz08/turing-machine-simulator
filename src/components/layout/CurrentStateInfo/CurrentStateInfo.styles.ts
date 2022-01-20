/*
 * Copyright (c) 2022, by Miłosz Gilga <https://miloszgilga.pl>
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

import styled from 'styled-components';
import { BorderElement, MainContainer } from '../../../styles/mixins.styles';

export const CurrentStateInfoContainer = styled.section`
    ${MainContainer()};
    margin: 0 0 20px;
`;

export const MachineCurrentStateInfoContainer = styled.div<{ $content: string }>`
    ${props => BorderElement({
    _textColour: props.theme.TEXT, _bgcColour: props.theme.BODY, _content: props.$content
})};
    padding: 16px 0 12px;
    width: 220px;
`;

export const MachineMainMessageInfoContainer = styled.div`
    margin: 0 50px;
    max-width: 700px;
    text-align: center;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;