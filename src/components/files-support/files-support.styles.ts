/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';
import { ControlButton } from '~/app-styles/mixins-styles';
import { button_rs, input_rs } from '~/app-styles/reset-styles';
import { NonChangeValues } from '~/app-styles/theme-styles';
import { Directions } from '~/app-utils/machine-config';

export const FilesSupportContainer = styled.section`
  display: flex;
  width: 1300px;
  margin: 30px 0;
`;

export const FilesSupportWrapper = styled.div<{
  $direction: Directions;
  $pseudoContent: string;
}>`
  border: 1px solid ${NonChangeValues.BORDER_COLOUR};
  border-radius: 5px;
  padding: 30px 0 20px 0;
  margin: ${({ $direction }) =>
    $direction === Directions.LEFT ? '0 20px 0 0' : '0 0 0 20px'};
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::after {
    position: absolute;
    content: '${({ $pseudoContent }) => $pseudoContent}';
    width: fit-content;
    top: -12px;
    padding: 0 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.TEXT};
    background-color: ${({ theme }) => theme.BODY};
    border: 3px solid ${({ theme }) => theme.BODY};
    font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const FilesSupportInput = styled(input_rs)`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const FilesSupportLabel = styled.label`
  display: block;
  position: relative;
  padding: 6px 15px;
  border: 0;
  border-radius: 5px;
  font-size: 1rem;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.BUTTON_COLOUR};
  font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
  background-color: ${({ theme }) => theme.BUTTON_BACKGROUND};
  width: 200px;
  text-align: center;
  cursor: pointer;
`;

export const FilesSupportAsideTextValue = styled.div`
  margin-top: 20px;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const FilesSupportButtonElement = styled(button_rs)`
  ${props =>
    ControlButton({
      _fontWeight: props.theme.BUTTON_FONT_WEIGHT,
      _bgcColour: props.theme.BUTTON_BACKGROUND,
      _textColour: props.theme.BUTTON_COLOUR,
      _disabledColour: props.theme.DIS_BUTTON_BACKGROUND,
      _ifSquare: false,
    })};
`;
