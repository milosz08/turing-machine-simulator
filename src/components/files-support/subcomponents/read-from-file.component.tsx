import type { JSX } from 'react';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as MachineAction from '@/redux/machine-store/actions';
import { Directions, FilesService } from '@/utils/machine-config';
import {
  FilesSupportAsideTextValue,
  FilesSupportInput,
  FilesSupportLabel,
  FilesSupportWrapper,
} from '../files-support.styles';

const ReadFromFileComponent: React.FC = (): JSX.Element => {
  const [showingTxt, setShowingTxt] = useState<FilesService>(FilesService.CLICK_TO_LOAD_PROGRAM);
  const dispatcher = useDispatch();

  const handleLoadMachineProgramFromFile = (): void => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const element = document.getElementById('fileInput') as HTMLInputElement;
      const file = element.files![0];
      const reader = new FileReader();
      const textFile = /text.*/;
      if (file.type.match(textFile)) {
        reader.onload = (e: ProgressEvent<FileReader>) => {
          dispatcher(
            MachineAction.loadExampleProgramAction({
              sourceCode: e.target.result as string,
            })
          );
          setShowingTxt(FilesService.SUCCESS_LOAD_PROGRAM);
          setTimeout(() => {
            setShowingTxt(FilesService.CLICK_TO_LOAD_PROGRAM);
          }, 3000);
        };
      } else {
        setShowingTxt(FilesService.PROGRAM_LOAD_ERROR);
      }
      reader.readAsText(file);
    }
  };

  return (
    <FilesSupportWrapper $direction={Directions.RIGHT} $pseudoContent="load program from file">
      <FilesSupportInput
        type="file"
        onChange={handleLoadMachineProgramFromFile}
        accept={`.${FilesService.MACHINE_PROGRAM_EXTENSION}`}
        id="fileInput"
      />
      <FilesSupportLabel htmlFor="fileInput">Select file</FilesSupportLabel>
      <FilesSupportAsideTextValue>{showingTxt}</FilesSupportAsideTextValue>
    </FilesSupportWrapper>
  );
};

export { ReadFromFileComponent };
