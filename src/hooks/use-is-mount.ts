/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 *   File name: use-is-mount.ts
 *   Created at: 2023-08-01, 20:50:43
 *   Last updated at: 2023-08-30, 18:35:26
 *   Project name: turing-machine-simulator
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 *
 *   <http://www.apache.org/license/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the license.
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
