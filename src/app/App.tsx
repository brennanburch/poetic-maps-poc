import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes';
import config from '../config';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: config.isDev ? 0 : Infinity,
      },
    },
  });

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        {config.isDev ? <ReactQueryDevtools /> : null}
      </QueryClientProvider>
    </Router>
  );
}

export default App;
