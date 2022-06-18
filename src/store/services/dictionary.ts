import { emptySplitApi } from "../slices/apiSlice";
import { DictionaryResult } from "types";

export const wordbookApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getDefinitions: build.query<DictionaryResult[], string>({
      query: (param) => `dictionary/${param}`,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetDefinitionsQuery } = wordbookApi;
