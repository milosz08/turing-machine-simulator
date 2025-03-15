import { machineStoreReducer } from '@/redux/machine-store/reducer';
import { preferencesStoreReducer } from '@/redux/preferences-store/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const reduxStore = configureStore({
  reducer: {
    machine: machineStoreReducer,
    preferences: preferencesStoreReducer,
  },
  devTools: process.env.BUILD_ENV === 'dev',
});

export type RootState = ReturnType<typeof reduxStore.getState>;
