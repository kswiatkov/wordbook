import { useEffect, useState } from "react";
import getDictionaryEntry from "./getDictionaryEntry";
import useSearchResultsReducer, {
  SearchResultsActionType,
} from "./useSearchResultsReducer";

const Search = () => {
  const [searchInputState, setSearchInputState] = useState("");
  const [searchResultsState, searchResultsDispatch] = useSearchResultsReducer();

  useEffect(() => {
    if (!searchInputState.length) {
      return;
    }
    const timeout = setTimeout(async () => {
      searchResultsDispatch({
        type: SearchResultsActionType.fetching,
      });
      const { data, error } = await getDictionaryEntry(searchInputState);
      if (error) {
        searchResultsDispatch({
          type: SearchResultsActionType.failed,
          payload: error,
        });
      } else if (data) {
        searchResultsDispatch({
          type: SearchResultsActionType.complete,
          payload: data,
        });
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputState, searchResultsDispatch]);

  return (
    <>
      <input
        type="text"
        value={searchInputState}
        onChange={(e) => setSearchInputState(e.target.value)}
      />
      {searchResultsState.results?.map(({ meanings }) =>
        meanings.map(({ definitions }) =>
          definitions.map(({ definition }) => (
            <div key={definition}>{definition}</div>
          ))
        )
      )}
    </>
  );
};

export default Search;
