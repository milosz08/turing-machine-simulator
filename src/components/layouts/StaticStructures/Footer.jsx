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

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, FooterLinks, FooterBrands} from './StaticStructures.styles';

/**
 * Component responsible for generating the footer. Includes information on the technologies used and
 * a link to post and full project documentation.
 * 
 * @returns { JSX.Element }
 */
const Footer = () => (
    <FooterContainer>
        <FooterLinks>
            <a
                href = 'mailto:gilgamilosz451@gmail.com'
                title = 'Feedback'
            >
                gilgamilosz451@gmail.com
            </a>
        </FooterLinks>
         <FooterBrands>
            <a
                href = 'https://reactjs.org/' 
                target = '_blank' 
                rel = 'noreferrer'
                title = 'ReactJS technology'
            >
                <FontAwesomeIcon icon = {faReact}/>
            </a>
        </FooterBrands>
        <FooterBrands>
            <a
                href = 'https://git-scm.com/' 
                target = '_blank' 
                rel = 'noreferrer'
                title = 'Used Git'
            >
                <FontAwesomeIcon icon = {faGitAlt}/>
            </a> 
        </FooterBrands>
        <FooterBrands>
            <a
                href = 'https://github.com/Milosz08' 
                target = '_blank' 
                rel = 'noreferrer'
                title = 'Goto my Github'
            >
                <FontAwesomeIcon icon = {faGithub}/>
            </a>
        </FooterBrands>
        <FooterBrands>
            <a
                href = 'https://nodejs.org/en/' 
                target = '_blank' 
                rel = 'noreferrer'
                title = 'NodeJS technology'
            >
                <FontAwesomeIcon icon = {faNodeJs}/>
            </a>
        </FooterBrands>
        <FooterLinks>
            <a
                href = 'https://github.com/Milosz08/ReactJS_Turing_Machine_Simulator'
                title = 'Full documentation available in my Github Repo'
            >
                Documentation
            </a>
        </FooterLinks>
    </FooterContainer>
);

export default Footer;