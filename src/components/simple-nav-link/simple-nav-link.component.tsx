import type { JSX, ReactNode } from 'react';
import * as React from 'react';
import { SimpleNavLinkContainer } from './simple-nav-link.styles';

type Props = {
  link: string;
  children: ReactNode;
  selfPage?: boolean;
  clickHandler?: () => void;
};

const SimpleNavLinkComponent: React.FC<Props> = ({
  link,
  children,
  selfPage,
  clickHandler,
}): JSX.Element => (
  <SimpleNavLinkContainer href={link} target={selfPage ? '_self' : '_blank'} onClick={clickHandler}>
    {children}
  </SimpleNavLinkContainer>
);

export { SimpleNavLinkComponent };
