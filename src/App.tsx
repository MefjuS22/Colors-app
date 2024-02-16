import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Main />} />
                        </Routes>
                    </Router>
                </CssBaseline>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;