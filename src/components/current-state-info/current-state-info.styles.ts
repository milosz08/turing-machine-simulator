import { BorderElement, MainContainer } from '@/styles/mixins-styles';
import styled from 'styled-components';

export const CurrentStateInfoContainer = styled.section`
  ${MainContainer()};
  margin: 0 0 20px;
`;

export const MachineCurrentStateInfoContainer = styled.div<{
  $content: string;
}>`
  ${props =>
    BorderElement({
      _textColour: props.theme.TEXT,
      _bgcColour: props.theme.BODY,
      _content: props.$content,
    })};
  padding: 16px 0 12px;
  width: 220px;
`;

export const MachineMainMessageInfoContainer = styled.div`
  margin: 0 50px;
  max-width: 700px;
  text-align: center;
  font-weight: ${({ theme }) => theme.INPUT_FONT_WEIGHT};
`;
