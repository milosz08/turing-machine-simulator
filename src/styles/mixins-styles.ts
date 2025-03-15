import styled, { css } from 'styled-components';
import { NonChangeValues } from './theme-styles';

export const BorderElement = ({
  _textColour,
  _bgcColour,
  _content,
}: {
  _textColour: string;
  _bgcColour: string;
  _content: string;
}) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1300px;
  border: 1px solid ${NonChangeValues.BORDER_COLOUR};
  border-radius: 5px;

  &::after {
    position: absolute;
    content: '${_content}';
    width: fit-content;
    white-space: nowrap;
    top: -9px;
    padding: 0 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${_textColour};
    background-color: ${_bgcColour};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const MainContainer = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  margin: 30px 0;
`;

export const ControlButton = ({
  _fontWeight,
  _bgcColour,
  _textColour,
  _disabledColour,
  _ifSquare,
}: {
  _fontWeight: string;
  _bgcColour: string;
  _textColour: string;
  _disabledColour: string;
  _ifSquare?: boolean;
}) => css`
  padding: ${_ifSquare ? '6px' : '6px 15px'};
  width: ${_ifSquare ? 40 : 200}px;
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: -1px;
  font-weight: ${_fontWeight};
  margin: 0 5px;
  background-color: ${_bgcColour};
  color: ${_textColour};

  &:disabled {
    background-color: ${_disabledColour};
  }
`;

export const Header2 = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;
