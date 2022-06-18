import { emptySplitApi } from "../slices/apiSlice";

interface WordbookResponse {
  id: string;
  word: string;
  definition: string;
}

export const wordbookApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getWordbook: build.query<WordbookResponse, void>({
      query: () => "definitions",
    }),
    addWordbookEntry: build.mutation<
      WordbookResponse,
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
