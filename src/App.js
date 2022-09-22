import React from "react";
// import "./Styles/teste.css"
import RotasApp from "./routes";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <div className="App">
      
     <AuthProvider>
        <RotasApp />
      </AuthProvider>
   
    </div>
  );
}

export default App;
