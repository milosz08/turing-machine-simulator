import type { JSX } from 'react';
import * as React from 'react';
import { FooterContainer, FooterCopyInfo, FooterSeparator } from './footer.styles';

const FooterComponent: React.FC = (): JSX.Element => {
  const currYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSeparator />
      <FooterCopyInfo>&copy; {currYear} by Miłosz Gilga.</FooterCopyInfo>
    </FooterContainer>
  );
};

export { FooterComponent };
