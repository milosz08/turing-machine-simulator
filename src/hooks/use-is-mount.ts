/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { useEffect, useRef } from 'react';

const useIsMount = (): boolean => {
  const isMountRef = useRef<boolean>(true);

  useEffect(() => {
    isMountRef.current = false;
  }, []);

  return isMountRef.current;
};

export default useIsMount;
