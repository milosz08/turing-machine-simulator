import { NavLink } from 'react-router-dom';
import { a_rs } from '@/styles/reset-styles';
import styled from 'styled-components';

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
