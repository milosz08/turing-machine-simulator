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

import { HeaderSingleNavContainer } from '../Header.styles';

const SimpleNavLink = React.lazy(() => import('../../SimpleNavLink/SimpleNavLink'));

const HeaderRightNavigation: React.FC = (): JSX.Element => {

    const handleScrollToSyntaxSection = (): void => {
        window.scrollTo(0, document.body.scrollHeight)
    };

    return (
        <HeaderSingleNavContainer>
            <SimpleNavLink
                link = 'https://github.com/Milosz08'
                content = 'My Github'
            />
            <SimpleNavLink
                link = '#syntax'
                content = 'Syntax'
                selfPage = {true}
                clickHandler = {handleScrollToSyntaxSection}
            />
        </HeaderSingleNavContainer>
    );
};

export default HeaderRightNavigation;