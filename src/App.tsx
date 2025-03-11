import { ThemeProvider } from './theme/theme-provider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
    <ToastContainer />
    </LocalizationProvider>
  );
}

export default App;
