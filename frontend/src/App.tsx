import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router";
import { CatsPage } from './components/CatsPage';
import { CreateNewCatPage } from './components/CreateNewCatPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatsPage />} />
          <Route path="/new-cat" element={<CreateNewCatPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
