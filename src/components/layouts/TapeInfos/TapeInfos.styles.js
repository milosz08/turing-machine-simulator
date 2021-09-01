import styled from 'styled-components';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const TapeInfosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1300px;
    margin-bottom: 40px;
`;

export const StateInfosWrapper = styled.div`
    width: 180px;
    border: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    border-radius: 5px;
    font-size: .9rem;
    padding: 16px 0 12px;
    text-align: center;
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