/*!
 * @file Footer.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, FooterLinks, FooterBrands} from './StaticStructures.styles';

/**
 * @details Component responsible for generating the footer. Includes information on the technologies used and 
 *          a link to post and full project documentation.
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