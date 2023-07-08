import { Link, useRoute, useLocation } from "wouter";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
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
  const user = useSelector((state) => state.user);

  const [location, setLocation] = useLocation();

  const { logout } = useLogout();

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container h-100">
        <a className="navbar-brand" href="index.html">
          <h1 className="tm-site-title mb-0">TranGasy Admin</h1>
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
                Tableau de bord
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
                  Rapports <i className="fas fa-angle-down" />
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Rapport journalier
                </a>
                <a className="dropdown-item" href="#">
                  Rapport hebdomadaire
                </a>
                <a className="dropdown-item" href="#">
                  Rapport annuel
                </a>
              </div>
            </li>
            <li className="nav-item">
              <ActiveLink href="/property">
                <i className="fas fa-shopping-cart" />
                Propriétés
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink href="/account">
                <i className="fas fa-user" />
                Comptes
              </ActiveLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className={
                  location == "/profil"
                    ? "nav-link dropdown-toggle active"
                    : "nav-link dropdown-toggle"
                }
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-cog" />
                <span>
                  Paramètres <i className="fas fa-angle-down" />
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  to={user ? "/profil" : "/login"}
                >
                  Profil
                </Link>
                <a className="dropdown-item" href="#">
                  Facturation
                </a>
              </div>
            </li>
          </ul>
          {!user && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <ActiveLink href="/login">Admin, Connexion</ActiveLink>
              </li>
            </ul>
          )}
          {user && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button class="nav-link btn btn-danger" onClick={logout}>
                  <FaPowerOff /> Déconnecter
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
