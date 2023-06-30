import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/redux";
import { useLocation } from "wouter";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bootstrap, setBootstrap] = useState("");
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    if (!email.length || !password.length) {
      setBootstrap("alert alert-warning");
      setError("Veuillez remplir les champs obligatoires.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://vast-erin-monkey-cape.cyclic.app/api/admins/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError({ message: data.message });
        setBootstrap("alert alert-danger");
        setIsLoading(false);
      }

      if (response.ok) {
        // Perform any necessary actions upon successful login
        setBootstrap("alert alert-success");
        setError({ message: data.message, success: true });
        localStorage.setItem("user", JSON.stringify(data.admin));
        dispatch(setUser(data.admin));
        setIsLoading(false);
        console.log(location);
        setLocation("/account");
      }
    } catch (error) {
      setBootstrap("alert alert-danger");
      setError({ message: error.message });
      setIsLoading(false);
    }
  };

  return { isLoading, error, bootstrap, login };
};

export default useLogin;
