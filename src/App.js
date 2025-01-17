import React from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";

const App = () => (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyle />
        </AuthProvider>

);

export default App;