import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
