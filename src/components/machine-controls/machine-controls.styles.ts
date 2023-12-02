/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';
import {
  BorderElement,
  ControlButton,
  MainContainer,
} from '~/app-styles/mixins-styles';
import { button_rs, input_rs } from '~/app-styles/reset-styles';

export const MachineControlsContainer = styled.section`
  ${MainContainer()}
`;

export const MachineControlsInputContainer = styled.div<{ $content: string }>`
  ${props =>
    BorderElement({
      _textColour: props.theme.TEXT,
      _bgcColour: props.theme.BODY,
      _content: props.$content,
    })};
  padding: 10px;
  width: 300px;
`;

export const MachineControlsInput = styled(input_rs)`
  flex-grow: 1;
  padding: 7px 5px 5px;
  color: ${({ theme }) => theme.INPUT_COLOUR};
  transition: 0.2s;
  text-align: center;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  &:focus {
    color: ${({ theme }) => theme.INPUT_FOCUS_COLOUR};
  }
`;

export const MachineControlsButtonsContainer = styled.div`
  display: flex;
`;

export const MachineControlButton = styled(button_rs)<{ $ifSquare?: boolean }>`
  ${props =>
    ControlButton({
      _fontWeight: props.theme.BUTTON_FONT_WEIGHT,
      _bgcColour: props.theme.BUTTON_BACKGROUND,
      _textColour: props.theme.BUTTON_COLOUR,
      _disabledColour: props.theme.DIS_BUTTON_BACKGROUND,
      _ifSquare: props.$ifSquare,
    })};
  display: flex;
  justify-content: center;
  align-items: center;
`;
