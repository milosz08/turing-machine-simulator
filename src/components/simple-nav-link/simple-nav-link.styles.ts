/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { a_rs } from '~/app-styles/reset-styles';

export const SimpleNavLinkContainer = styled(a_rs)`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
`;

export const ReactNavLinkContainer = styled(NavLink)`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
