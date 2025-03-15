import type { JSX } from 'react';
import * as React from 'react';
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Header2 } from '@/styles/mixins-styles';
import {
  InfoComponentContainer,
  InfoComponentHeader,
  InfoComponentListElement,
  InfoComponentOrderedList,
} from './usage-info.styles';

const TopUsageInfoComponent: React.FC = (): JSX.Element => (
  <InfoComponentContainer>
    <Header2>Basic usage:</Header2>
    <InfoComponentHeader>
      This is a deterministic, single-tape Turing machine simulator written in TypeScript with
      ReactJS library. To start using the machine you should:
    </InfoComponentHeader>
    <InfoComponentOrderedList>
      <InfoComponentListElement>
        Load a sample program from the list or create your own (if you don&apos;t know the syntax,
        see below the page).
      </InfoComponentListElement>
      <InfoComponentListElement>
        Enter the initial state label and the initial tape value in the &apos;initial input&apos;
        and &apos;initial state&apos; fields respectively.
      </InfoComponentListElement>
      <InfoComponentListElement>
        Compile the program (manually with the button or automatically by clicking on any field
        outside the code area).
      </InfoComponentListElement>
      <InfoComponentListElement>
        If the compilation is successful, reset the tape and print head settings using the
        &apos;Machine Reset&apos; button. If the compilation fails, correct all errors (you will see
        them if you click on the bottom colored bar of the code area).
      </InfoComponentListElement>
      <InfoComponentListElement>
        Click <FaPlay /> to start the machine operation. You can also click the &apos;Run at full
        speed&apos; button (not recommended on slow computers) or go step by &apos;step&apos; using
        the <FaStepBackward /> and <FaStepForward /> buttons.
      </InfoComponentListElement>
    </InfoComponentOrderedList>
  </InfoComponentContainer>
);

export { TopUsageInfoComponent };
