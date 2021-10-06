/*
 * Copyright (c) 2021, by Miłosz Gilga <https://miloszgilga.pl>
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

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    max-width: 1920px;
    margin: 50px 0 40px 0;
    color: ${({ theme }) => theme.TEXT};
    a {
        color: ${({ theme }) => theme.TEXT_TINT1};
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const SideContent = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-basis: 50%;
    a {
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
`;

export const CenterContent = styled.div`
    flex-basis: 600px;
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
    h1 {
        font-size: 1.6rem;
        line-height: 1;
        font-weight: 500;
    }
    a {
        position: relative;
        top: -5px;
        font-size: 0.9rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT - 200};
    }
`;

export const ToggleButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: .8rem;
    input[type = 'checkbox'] {
        opacity: 0;
	    position: absolute;
        :checked + label div {
            transform: translateX(14px);
        }
    }
    label {
        background-color: ${({ theme }) => theme.TEXT};
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 12px;
        width: 26px;
        transform: scale(1.5);
    }
    div {
        background-color: ${({ theme }) => theme.BODY};
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        height: 8px;
        width: 8px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }
    aside {
        margin: -3px 20px 0 20px;
    }
`;

export const InfosContainer = styled.div`
    width: 1300px;
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.TEXT};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    h3 {
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    }
    ol, ul {
        margin: 10px 0 0 60px;
        li {
            padding: 2px 0;
            svg {
                margin: 0 10px;
                font-size: .9rem;
                color: ${({ theme }) => theme.TEXT};
            }
        }
    }
`;

export const SyntaxContainer = styled(InfosContainer)`
    margin-top: 40px;
    div {
        text-align: center;
        margin: 20px 0;
        font-weight: 900;
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 40px 0;
    a {
        color: ${({ theme }) => theme.TEXT};
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const FooterLinks = styled.div`
    flex-basis: 50%;
    text-align: center;
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT - 100};
`;

export const FooterBrands = styled.div`
    font-size: 2rem;
    margin: 0 15px;
    a {
        color: ${({ theme }) => theme.TEXT}
    }
`;