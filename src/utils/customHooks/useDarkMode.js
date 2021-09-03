/**
 * @file useDarkMode.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Custom React Hook.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
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