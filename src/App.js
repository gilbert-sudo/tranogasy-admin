import { BrowserRouter, Routes, Route } from "react-router-dom";

// all pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

//all components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
