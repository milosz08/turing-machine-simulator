/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';
import { MachineControlButton } from '~/app-components/machine-controls/machine-controls.styles';
import { NonChangeValues } from '~/app-styles/theme-styles';

export const LoadExamplesProgramContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  border: 1px solid ${NonChangeValues.BORDER_COLOUR};
  border-radius: 5px;
  width: 1300px;
  margin: 50px 0 30px 0;
  padding: 30px 0;
  &::after {
    position: absolute;
    content: 'example turing machine simulator programs';
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

export const LoadExamplesExampleProgramButton = styled(MachineControlButton)`
  width: fit-content;
`;
