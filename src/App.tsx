import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <Router>
      <div className="font-mulish">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
