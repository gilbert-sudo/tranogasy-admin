import { useState } from "react";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bootstrap, setBootstrap] = useState("");

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
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        setBootstrap("alert alert-danger");
        setIsLoading(false);
      }

      if (response.ok) {
        // Perform any necessary actions upon successful login
        setBootstrap("alert alert-success");
        setError("Vous vous êtes connecté(e) maintenant!");
        setIsLoading(false);
      }
    } catch (error) {
      setBootstrap("alert alert-danger");
      setError("Une erreur s'est produite lors de la tentative de connexion.");
      setIsLoading(false);
    }
  };

  return { isLoading, error, bootstrap, login };
};

export default useLogin;
