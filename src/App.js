import { Switch, Route, Link, useRoute, Router } from "wouter";
import { useLocationProperty, navigate } from "wouter/use-location";

// all pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

//all components
// import Navbar from "./components/Navbar";

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

const hashNavigate = (to) => navigate("#" + to);

const useHashLocation = () => {
  const location = useLocationProperty(hashLocation);
  return [location, hashNavigate];
};

/**
 * `Utility components
 */

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a href={props.href} className={isActive ? "nav-link active" : "nav-link"}>
        {props.children}
      </a>
    </Link>
  );
};

function App() {
  return (
    <div className="App">
      <Router hook={useHashLocation}>
        <div className="App">
          <nav className="navbar navbar-expand-xl">
            <div className="container h-100">
              <a className="navbar-brand" href="index.html">
                <h1 className="tm-site-title mb-0">Product Admin</h1>
              </a>
              <button
                className="navbar-toggler ml-auto mr-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars tm-nav-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto h-100">
                  <li className="nav-item">
                    <ActiveLink href="/">
                      {" "}
                      <i className="fas fa-tachometer-alt" />
                      Dashboard
                      <span className="sr-only">(current)</span>
                    </ActiveLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-file-alt" />
                      <span>
                        Reports <i className="fas fa-angle-down" />
                      </span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Daily Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Weekly Report
                      </a>
                      <a className="dropdown-item" href="#">
                        Yearly Report
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="products.html">
                      <i className="fas fa-shopping-cart" />
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="accounts.html">
                      <i className="far fa-user" />
                      Accounts
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-cog" />
                      <span>
                        Settings <i className="fas fa-angle-down" />
                      </span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        Billing
                      </a>
                      <a className="dropdown-item" href="#">
                        Customize
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <ActiveLink href="/login">
                      Admin, Logout
                    </ActiveLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main>
            <Switch>
              {/* <Route path="/info">
                <Redirect to="/about" />
              </Route> */}
              <Route path="/">
                <Home />
              </Route>
              <Route path="/login">
                <LoginPage />
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
