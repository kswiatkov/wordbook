import Search from "features/search/Search";
import { useEffect } from "react";
import {
  useGetWordbookQuery,
  useAddWordbookEntryMutation,
} from "store/services/wordbook";
import "./App.css";

function App() {
  const { data } = useGetWordbookQuery();
  const [addEntry] = useAddWordbookEntryMutation();

  useEffect(() => {
    addEntry({
      word: "aergerf",
      definition: "ergerg",
    });
  }, []);
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
