import type { JSX } from 'react';
import * as React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CodeAreaContext } from '@/components/code-area/code-area.component';
import {
  CodeAreaFieldTextarea,
  CodeAreaFieldWrapper,
} from '@/components/code-area/code-area.styles';
import * as MachineAction from '@/redux/machine-store/actions';
import { IMachineStoreReduxState } from '@/redux/machine-store/state';
import * as PrefAction from '@/redux/preferences-store/actions';
import { RootState } from '@/redux/redux-store';
import { AdditionalMessages } from '@/utils/machine-messages';
import { MachineModes } from '@/utils/machine-modes';

const CodeAreaFieldComponent: React.FC = (): JSX.Element => {
  const stateMach: Partial<IMachineStoreReduxState> = useSelector(
    (state: RootState) => state.machine
  );
  const { areaRef } =
    useContext<Partial<{ areaRef: React.MutableRefObject<any> }>>(CodeAreaContext);

  const { rawCodeAreaInput, disabledControls, machineState } = stateMach;
  const dispatcher = useDispatch();

  const handleCompileCodeArea = (): void => {
    dispatcher(MachineAction.compileCodeAreaAction());
  };

  const handleInsertSourceCode = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatcher(MachineAction.insertSourceCodeAction({ sourceCode: target.value }));
  };

  const handleOnScrollTextarea = (): void => {
    dispatcher(
      PrefAction.changeCodeAreaScrollPosAction({
        scrollPos: Number(areaRef.current.scrollTop),
      })
    );
  };

  const handleTextFieldActive = (isEventIsFocus: boolean): void => {
    if (isEventIsFocus) {
      dispatcher(MachineAction.disableAllControlButtonsAction());
    } else {
      dispatcher(PrefAction.calculateCursorPosAction({ areaRef }));
    }
  };

  return (
    <CodeAreaFieldWrapper>
      <CodeAreaFieldTextarea
        $scrollDisabled={machineState === MachineModes.RUNNING}
        placeholder={AdditionalMessages.CODE_AREA_PLACEHOLDER}
        ref={areaRef}
        value={rawCodeAreaInput}
        onBlur={handleCompileCodeArea}
        onChange={handleInsertSourceCode}
        onScroll={handleOnScrollTextarea}
        onFocus={() => handleTextFieldActive(true)}
        onClick={() => handleTextFieldActive(false)}
        onKeyDown={() => handleTextFieldActive(false)}
        disabled={disabledControls.initialInput}
      />
    </CodeAreaFieldWrapper>
  );
};

export { CodeAreaFieldComponent };
