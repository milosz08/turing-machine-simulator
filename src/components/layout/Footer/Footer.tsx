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

import * as React from 'react';

import { FooterContainer } from './Footer.styles';

const SimpleNavLink = React.lazy(() => import('../SimpleNavLink/SimpleNavLink'));

const Footer: React.FC = (): JSX.Element => (
    <FooterContainer>
        <SimpleNavLink
            link = 'mailto:gilgamilosz451@gmail.com'
            content = 'gilgamilosz451@gmail.com'
            selfPage = {true}
        />
        <SimpleNavLink
            link = 'https://github.com/Milosz08/ReactJS_Turing_Machine_Simulator'
            content = 'Documentation'
        />
    </FooterContainer>
);

export default Footer;