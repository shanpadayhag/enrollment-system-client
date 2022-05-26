import React from 'react'
import Routes from "./routes/Routes";
import { UserProvider } from "./contexts";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <UserProvider>
            <Routes />
        </UserProvider>
    </div>
  );
}

export default App;
