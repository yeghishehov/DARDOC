import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";
import AuthProvider from "./hooks/auth.provider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>{routes()}</Router>
      </AuthProvider>
    </div>
  );
}

export default App;
