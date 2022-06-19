import httpService from "./http.service";
import { DictionaryResult } from "types";

const dictionaryService = {
  getDictionaryEntry: (word: string) =>
    httpService.get<DictionaryResult[]>(`/dictionary/${word}`),
};

export default dictionaryService;
