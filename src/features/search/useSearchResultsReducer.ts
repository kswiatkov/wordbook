import { useReducer } from "react";
import { DictionaryResult } from "app/types";

export enum SearchResultsActionType {
  complete,
  failed,
  fetching,
}

interface SearchResultsState {
  results: DictionaryResult[] | null;
  error: string | null;
  isFetching: boolean;
}

const initialSearchResultsState: SearchResultsState = {
  results: null,
  error: null,
  isFetching: false,
};

type Action =
  | {
      type: SearchResultsActionType.complete;
      payload: DictionaryResult[];
    }
  | {
      type: SearchResultsActionType.failed;
      payload: string;
    }
  | {
      type: SearchResultsActionType.fetching;
    };

export function searchResultsReducer(
  state: SearchResultsState,
  action: Action
) {
  switch (action.type) {
    case SearchResultsActionType.complete:
      return {
        results: action.payload,
        error: null,
        isFetching: false,
      };
    case SearchResultsActionType.failed:
      return {
        results: null,
        error: action.payload,
        isFetching: false,
      };
    case SearchResultsActionType.fetching:
      return {
        results: null,
        error: null,
        isFetching: true,
      };
    default:
      return state;
  }
}

const useSearchResultsReducer = () =>
  useReducer(searchResultsReducer, initialSearchResultsState);

export default useSearchResultsReducer;
