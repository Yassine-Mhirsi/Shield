import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
  },
});
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient} >
      <Auth0ProviderWithNavigate>
        <Routes />
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
