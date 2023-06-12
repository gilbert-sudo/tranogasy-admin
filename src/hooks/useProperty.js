export const useProperty = () => {
  const getProperties = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/properties`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return { getProperties };
};
