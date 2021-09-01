import styled from 'styled-components';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const TapeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    border: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    border-radius: 5px;
    padding: 30px 0 50px 0;
    width: 1300px;
    ::after {
        position: absolute;
        content: 'machine tape';
        width: fit-content;
        top: -9px;
        padding: 0 6px;
        left: 50%;
        transform: translateX(-50%);
        color: ${STYLED_CONSTANTS.WHITE_COLOUR};
        background-color: ${STYLED_CONSTANTS.BLACK_COLOUR};
        font-size: .8rem;
        font-weight: 200;
        text-transform: uppercase;
    }
`;

export const TapeCharacter = styled.span`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 17px;
    height: 24px;
    font-size: 1.3rem;
    border-radius: 3px;
    font-weight: ${props => props.active ? 700 : 200};
    color: ${props => props.active ? STYLED_CONSTANTS.LIGHTEN_BLACK_COLOUR : STYLED_CONSTANTS.WHITE_COLOUR};
    background-color: ${props => props.active ? STYLED_CONSTANTS.WHITE_COLOUR : 'transparent'};
    ::before {
        position: absolute;
        display: ${props => props.active ? 'block' : 'none'};
        content: '';
        bottom: -17px;
        width: 0; 
        height: 0; 
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 10px solid ${STYLED_CONSTANTS.WHITE_COLOUR};
    }
    ::after {
        position: absolute;
        display: ${props => props.active ? 'block' : 'none'};
        content: 'Head';
        width: 60px;
        height: 15px;
        font-size: .8rem;
        text-align: center;
        background-color: ${STYLED_CONSTANTS.WHITE_COLOUR};
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        bottom: -32px;
    }
`;