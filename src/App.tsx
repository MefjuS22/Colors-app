import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Routes>
            <Route path="" element={<Main />} />
          </Routes>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
