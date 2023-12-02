/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';
import { MachineControlButton } from '~/app-components/machine-controls/machine-controls.styles';
import { BorderElement, MainContainer } from '~/app-styles/mixins-styles';
import { input_rs } from '~/app-styles/reset-styles';

export const AdditionalControlsContainer = styled.section`
  ${MainContainer()};
  margin: 20px 0 40px;
`;

export const MachineChangeAdditionalValuesContainer = styled.div<{
  $content: string;
}>`
  ${props =>
    BorderElement({
      _textColour: props.theme.TEXT,
      _bgcColour: props.theme.BODY,
      _content: props.$content,
    })};
  padding: 15px 0 18px;
  width: 220px;
`;

export const CompileButtonElement = styled(MachineControlButton)`
  width: fit-content;
  height: fit-content;
  font-weight: ${({ theme }) => theme.BUTTON_FONT_WEIGHT};
`;

export const MachineChangeHeadSpeedRangeInput = styled(input_rs)`
  appearance: none;
  width: calc(100% - 60px);
  position: relative;
  top: 3px;
  margin: 10px 0;
  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${({ theme }) => theme.TEXT};
    height: 13px;
    width: 13px;
    border-radius: 100%;
    cursor: pointer;
    margin-top: -5px;
  }
  &::-moz-range-thumb {
    appearance: none;
    background-color: ${({ theme }) => theme.TEXT};
    height: 13px;
    width: 13px;
    border-radius: 100%;
    cursor: pointer;
  }
  &::-ms-thumb {
    appearance: none;
    background-color: ${({ theme }) => theme.TEXT};
    height: 13px;
    width: 13px;
    border-radius: 100%;
    cursor: pointer;
  }
  &::-ms-track {
    cursor: pointer;
    border-color: transparent;
    color: transparent;
    height: 3px;
    background-color: transparent;
    border-radius: 100px;
  }
  &::-webkit-slider-runnable-track {
    height: 3px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
    border-radius: 100px;
  }
  &::-moz-range-track {
    height: 3px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
    border-radius: 100px;
  }
  &::-ms-fill-lower {
    background-color: ${({ theme }) => theme.DIS_BUTTON_BACKGROUND};
  }
`;
