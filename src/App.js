import { Switch, Route, Router } from "wouter";
import { useLocationProperty, navigate } from "wouter/use-location";

// all pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PropertyPage from "./pages/PropertyPage";
import AccountPage from "./pages/AccountPage";
import ImageUpload from "./pages/ImageUpload";

//all components
import Navbar from "./components/Navbar";

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

const hashNavigate = (to) => navigate("#" + to);

const useHashLocation = () => {
  const location = useLocationProperty(hashLocation);
  return [location, hashNavigate];
};

function App() {
  return (
    <div className="App">
      <Router hook={useHashLocation}>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              {/* <Route path="/info">
                <Redirect to="/about" />
              </Route> */}
              <Route path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/property">
                <PropertyPage />
              </Route>
              <Route path="/account">
                <AccountPage />
              </Route>
              <Route path="/upload">
                <ImageUpload />
              </Route>
              <Route path="/:anything*">
                <center>
                  <b>404:</b> Sorry, this page isn't ready yet!
                </center>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
