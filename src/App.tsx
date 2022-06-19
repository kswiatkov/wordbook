import { ThemeProvider } from "styled-components";
import theme from "theme";
import DictionarySearch from "components/DictionarySearch";
import Wordbook from "components/Wordbook";
import { Flex } from "components/ui";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Flex>
          <DictionarySearch />
          <Wordbook />
        </Flex>
      </div>
    </ThemeProvider>
  );
}

export default App;
