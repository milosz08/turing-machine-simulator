import styled from 'styled-components';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
    margin: 30px 0;
`;

export const ControlButton = styled.button`
    padding: 6px 15px;
    width: 200px;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    letter-spacing: -1px;
    font-weight: 600;
    margin: 0 5px;
    background-color: ${STYLED_CONSTANTS.WHITE_COLOUR};
    color: ${STYLED_CONSTANTS.LIGHTEN_BLACK_COLOUR};
    :disabled {
        background-color: ${STYLED_CONSTANTS.GRAY_COLOUR};
        cursor: not-allowed;
    }
`;

export const ControlButtonSqr = styled(ControlButton)`
    padding: 6px;
    width: 40px;
`;

export const ControlInputContainer = styled.div`
    border: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    position: relative;
    display: flex;
    input {
        flex-grow: 1;
        border: none;
        background-color: transparent;
        padding: 7px 5px 5px;
        color: ${STYLED_CONSTANTS.GRAY_COLOUR};
        transition: .2s;
        text-align: center;
        font-size: .9rem;
        :focus {
            outline: none;
            color: ${STYLED_CONSTANTS.WHITE_COLOUR}
        }
    }
    ::after {
        position: absolute;
        content: '${props => props.pseudoContent}';
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