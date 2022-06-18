import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface WordbookResponse {
  id: string;
  word: string;
  definition: string;
}

export const wordbookApi = createApi({
  reducerPath: "wordbookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/definitions",
  }),
  tagTypes: ["Wordbook"],
  endpoints: (build) => ({
    getWordbook: build.query<WordbookResponse, void>({
      query: () => "",
      providesTags: ["Wordbook"],
    }),
    addWordbookEntry: build.mutation<
      WordbookResponse,
      { word: string; definition: string }
    >({
      query(body) {
        return {
          url: ``,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Wordbook"],
    }),
  }),
});

export const { useGetWordbookQuery, useAddWordbookEntryMutation } = wordbookApi;
