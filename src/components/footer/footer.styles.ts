/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const FooterSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.SEPARATOR};
`;

export const FooterCopyInfo = styled.p`
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
  color: ${({ theme }) => theme.TEXT_TINT1};
`;
