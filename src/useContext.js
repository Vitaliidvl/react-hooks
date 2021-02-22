//Alert, AlertContext, Main

//Hooks: useContext, useReducer

import React  from "react";
import "./App.css";
import Main from "./Main";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";



function App() {
 
  return (
    <AlertProvider value={alert}>
      <div className="App pt-3">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
