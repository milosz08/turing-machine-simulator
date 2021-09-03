/**
 * @file useIsMount.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript Custom React Hook.
 *
 * @projectName "turing-machine-simulator-react-js"
 * @version "^0.1.0"
 *
 * @date 09/03/2021
 */

import { useRef, useEffect } from 'react';

/**
 * @details This hook is responsible for checking that this is the first render of a component.
 * 
 * @returns isMountRef.current - handler for HTML element.
 */
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};