import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1920px;
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
`;

export const HeaderSingleNavContainer = styled.nav`
  width: calc((100% - 400px) / 2);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderMainTitleContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderMainTitle = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 500;
  color: ${({ theme }) => theme.TEXT};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderAsideText = styled.p`
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  font-size: 0.9rem;
  margin: 5px 0;
`;
