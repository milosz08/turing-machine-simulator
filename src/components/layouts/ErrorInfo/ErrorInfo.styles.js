import styled from 'styled-components';
import STYLED_CONSTANTS from '../../../utils/StylesConstants';

export const ErrorInfoContainer = styled.div`
    width: calc(100% - 60px);
    margin-left: 60px;
    border: 1px solid ${STYLED_CONSTANTS.DARK_GRAY_COLOUR};
    border-top: none;
    font-size: .8rem;
    font-weight: 100;
    padding: 15px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    header {
        margin-bottom: 5px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListElement = styled.li`
    margin-left: 20px;
    color: ${STYLED_CONSTANTS.GRAY_COLOUR};
    span {
        color: ${props => props.labelInfoColour};
        font-weight: 400;
    }
    strong {
        font-weight: 100;
    }
`;