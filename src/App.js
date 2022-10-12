import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
