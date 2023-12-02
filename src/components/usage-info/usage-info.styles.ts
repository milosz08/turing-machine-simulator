/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';

export const InfoComponentContainer = styled.section`
  width: 1300px;
  font-size: 1rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.TEXT};
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const InfoComponentHeader = styled.h3`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;

export const InfoComponentOrderedList = styled.ol`
  margin: 10px 0 0 60px;
`;

export const InfoComponentUnorderedList = styled.ul`
  margin: 10px 0 0 60px;
`;

export const InfoComponentListElement = styled.li`
  padding: 2px 0;
  svg {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.TEXT};
  }
`;

export const InfoComponentCenterBlockContent = styled.div`
  text-align: center;
  margin: 20px 0;
  font-weight: 900;
`;
