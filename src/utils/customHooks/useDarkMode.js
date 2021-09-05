/*!
 * @file useDarkMode.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript Custom React Hook.
 *
 * @projectName turing-machine-simulator-react-js
 * @version ^0.1.0
 * @license MIT (full terms of this license available in 'LICENSE' repo file)
 *
 * @date 09/05/2021
 */

import { useEffect, useState } from 'react';

/**
 * @details This hook responsible for handling dark mode change.
 * 
 * @returns [ theme, themeToggler ] - value and callback function to change this value.
 */
export const useDarkMode = () => {
    
    const [ theme, setTheme ] = useState('light');

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);
    return [theme, themeToggler]
};