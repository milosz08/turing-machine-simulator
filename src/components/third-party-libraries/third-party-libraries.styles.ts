/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';
import { a_rs } from '~/app-styles/reset-styles';

export const ThirdPartyLibrariesContainer = styled.section`
  width: 1300px;
  font-size: 1rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.TEXT};
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const ThirdPartyLibrariesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.75rem;
  row-gap: 0.125rem;
  list-style: none;
`;

export const ThirdPartyLibrariesListElement = styled.li`
  display: flex;
  &:nth-child(odd) {
    justify-content: flex-end;
  }
  &:nth-child(even) {
    justify-content: flex-start;
  }
`;

export const ThirdPartyLibraryLink = styled(a_rs)``;
