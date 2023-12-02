/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';

export const a_rs = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const input_rs = styled.input`
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const button_rs = styled.button`
  cursor: pointer;
  border: none;
  &:disabled {
    cursor: not-allowed;
  }
`;
