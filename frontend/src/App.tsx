import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { CatsPage } from './components/CatsPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatsPage />
    </QueryClientProvider>
  )
}

export default App;
