import type { JSX } from 'react';
import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as MachineAction from '@/redux/machine-store/actions';
import * as PrefAction from '@/redux/preferences-store/actions';
import { FilesService, examplePrograms } from '@/utils/machine-config';
import {
  LoadExamplesExampleProgramButton,
  LoadExamplesProgramContainer,
} from './load-example-program.styles';

const LoadExampleProgramComponent: React.FC = (): JSX.Element => {
  const dispatcher = useDispatch();

  const loadProgramCallback = useCallback(programName => {
    const URL = `${programName.replace(/ /g, '-').toLocaleLowerCase()}.${
      FilesService.MACHINE_PROGRAM_EXTENSION
    }`;
    const relativePath = `/assets/${FilesService.DEF_PROGRAMS_REL_PATH}/`;
    fetch(relativePath + URL, { method: 'GET' })
      .then(res => {
        if (res.ok) return res.text();
        throw new Error(res.statusText);
      })
      .then(data => {
        if (data) {
          dispatcher(MachineAction.loadExampleProgramAction({ sourceCode: data }));
          dispatcher(PrefAction.resetCursorPositionAction());
        } else {
          dispatcher(MachineAction.setLoadAjaxErrorAction());
        }
      })
      .catch(err => {
        dispatcher(MachineAction.setLoadAjaxErrorAction());
        console.error(`Failure load program! Error: ${err}`);
      });
    dispatcher(MachineAction.disableControlsBeforeLoadProgramAction());
  }, []);

  const generateExamplesPrograms: JSX.Element[] = examplePrograms.map(programName => (
    <LoadExamplesExampleProgramButton
      key={`${programName}_${Math.floor(Math.random() * 1000)}`}
      onClick={() => loadProgramCallback(programName)}
      title={`Click to load '${programName}' example program`}>
      {programName}
    </LoadExamplesExampleProgramButton>
  ));

  useEffect(() => {
    loadProgramCallback(examplePrograms[0]);
  }, []);

  return <LoadExamplesProgramContainer>{generateExamplesPrograms}</LoadExamplesProgramContainer>;
};

export { LoadExampleProgramComponent };
