import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "auth/Auth0ProviderWithNavigate";

function App() {
  return (
    <Router>
      <Auth0ProviderWithNavigate>
        <Routes />
      </Auth0ProviderWithNavigate>
    </Router>
  );
}

export default App;