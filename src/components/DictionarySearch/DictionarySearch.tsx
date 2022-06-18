import { useEffect, useState } from "react";
import { useLazyGetDefinitionsQuery } from "store/services/dictionary";
import { useAddWordbookEntryMutation } from "store/services/wordbook";

const DictionarySearch = () => {
  const [searchInputState, setSearchInputState] = useState("");
  const [triggerGetDefinitions, { data }] = useLazyGetDefinitionsQuery();
  const [addWordbookEntry] = useAddWordbookEntryMutation();

  useEffect(() => {
    if (!searchInputState.length) {
      return;
    }
    const timeout = setTimeout(
      () => triggerGetDefinitions(searchInputState),
      500
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputState, triggerGetDefinitions]);

  return (
    <>
      <input
        type="text"
        value={searchInputState}
        onChange={(e) => setSearchInputState(e.target.value)}
      />
      {data?.map(({ meanings, word }) =>
        meanings.map(({ definitions }) =>
          definitions.map(({ definition }) => (
            <div key={definition}>
              <p>{definition}</p>
              <button onClick={() => addWordbookEntry({ word, definition })}>
                save
              </button>
            </div>
          ))
        )
      )}
    </>
  );
};

export default DictionarySearch;
