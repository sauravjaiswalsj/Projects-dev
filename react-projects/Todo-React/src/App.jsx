import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavBar from './Components/Navbar';
import Dashboard from './Components/Todo';

//create infinite cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    },
  },
});

const App = () => {

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Dashboard />
        </QueryClientProvider>
      </BrowserRouter>

    </>
  )
}

export default App
