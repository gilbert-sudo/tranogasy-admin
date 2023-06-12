import { Link, useRoute } from "wouter";
/**
 * `Utility components
 */

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a
        href={props.href}
        className={isActive ? "nav-link active" : "nav-link"}
      >
        {props.children}
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <ActiveLink href="/property">
                <i className="fas fa-shopping-cart" />
                Products
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="/account">
                <i className="fas fa-user" />
                Accounts
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
                <i className="fas fa-cog" />
                <span>
                  Settings <i className="fas fa-angle-down" />
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <ActiveLink href="/login">Admin, Logout</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
