/*
 * Copyright (c) 2023 by MILOSZ GILGA <https://miloszgilga.pl>
 * For check application license, check LICENSE file.
 */
import { configureStore } from '@reduxjs/toolkit';
import { machineStoreReducer } from '~/app-redux/machine-store/reducer';
import { preferencesStoreReducer } from '~/app-redux/preferences-store/reducer';

export const reduxStore = configureStore({
  reducer: {
    machine: machineStoreReducer,
    preferences: preferencesStoreReducer,
  },
  devTools: process.env.BUILD_ENV === 'dev',
});

export type RootState = ReturnType<typeof reduxStore.getState>;
