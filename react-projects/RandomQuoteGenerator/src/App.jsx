import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RandomQuote from './Components/Quote';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <RandomQuote />
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default App
