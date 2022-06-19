export interface Phonetic {
  text: string;
  audio: string;
}

export interface Definition {
  definition: string;
  example: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface DictionaryResult {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}

export enum RequestStatus {
  idle,
  pending,
  fulfilled,
  rejected,
}
