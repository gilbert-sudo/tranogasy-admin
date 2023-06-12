export const useLogin = () => {
  const login = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/cities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return { login };
};
