/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';

export const SuspenseLoaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.BODY};
`;

export const SuspenseLoaderSpinner = styled.div`
  width: 120px;
  height: 120px;
  &:after {
    content: ' ';
    display: block;
    width: 120px;
    height: 120px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
