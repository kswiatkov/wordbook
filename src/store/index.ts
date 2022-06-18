import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { wordbookApi } from "./services/wordbook";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [wordbookApi.reducerPath]: wordbookApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(wordbookApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
