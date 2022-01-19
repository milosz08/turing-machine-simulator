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

export const InfoComponentContainer = styled.div<{ $margin: string }>`
    width: 1300px;
    font-size: 1rem;
    margin: ${({ $margin }) => $margin};
    color: ${({ theme }) => theme.TEXT};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const InfoComponentHeader = styled.h3`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const InfoComponentOrderedList = styled.ol`
    margin: 10px 0 0 60px;
`;

export const InfoComponentUnorderedList = styled.ul`
    margin: 10px 0 0 60px;
`;

export const InfoComponentListElement = styled.li`
    padding: 2px 0;
    svg {
        font-size: .9rem;
        color: ${({ theme }) => theme.TEXT};
    }
`;

export const InfoComponentCenterBlockContent = styled.div`
    text-align: center;
    margin: 20px 0;
    font-weight: 900;
`;