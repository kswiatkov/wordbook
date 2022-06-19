import { ThemeProvider } from "styled-components";
import theme from "theme";
import DictionarySearch from "components/DictionarySearch";
import { Box } from "components/ui";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <DictionarySearch />
      </Box>
    </ThemeProvider>
  );
}

export default App;
