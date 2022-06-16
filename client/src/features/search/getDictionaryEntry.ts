import { DictionaryResult } from "app/types";

interface ErrorJSON {
  title: string;
  message: string;
  resolution: string;
}

async function getDictionaryEntry(
  query: string
): Promise<
  { data: DictionaryResult[]; error: null } | { data: null; error: string }
> {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    const resJSON = await response.json();
    if (response.ok) {
      return {
        data: resJSON as DictionaryResult[],
        error: null,
      };
    } else {
      return {
        data: null,
        error: (resJSON as ErrorJSON).title,
      };
    }
  } catch (error) {
    return { data: null, error: "Something went wrong" };
  }
}

export default getDictionaryEntry;
