import { input_rs } from '@/styles/reset-styles';
import styled from 'styled-components';

export const CheckboxToggleElementContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 0.8rem;
`;

export const CheckboxToggleAsideLeftAndRight = styled.p`
  margin: -3px 20px 0;
`;

export const CheckboxToggleInput = styled(input_rs)`
  opacity: 0;
  position: absolute;

  &:checked + label div {
    transform: translateX(14px);
  }
`;

export const CheckboxToggleLabel = styled.label`
  background-color: ${({ theme }) => theme.TEXT};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 12px;
  width: 26px;
  transform: scale(1.5);
`;

export const CheckboxToggleStyledInput = styled.div`
  background-color: ${({ theme }) => theme.BODY};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 8px;
  width: 8px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;
