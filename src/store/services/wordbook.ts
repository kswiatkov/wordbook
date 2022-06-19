import { emptySplitApi } from "../slices/apiSlice";

interface WordbookEntry {
  id: string;
  word: string;
  definition: string;
}

export const wordbookApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getWordbook: build.query<WordbookEntry[], void>({
      query: () => "definitions",
    }),
    addWordbookEntry: build.mutation<
      WordbookEntry,
      { word: string; definition: string }
    >({
      query(body) {
        return {
          url: "definitions",
          method: "POST",
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetWordbookQuery, useAddWordbookEntryMutation } = wordbookApi;
