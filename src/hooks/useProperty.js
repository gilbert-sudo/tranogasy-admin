import { useDispatch } from "react-redux";
import { setProperties } from "../redux/redux";

export const useProperty = () => {

  const dispatch = useDispatch();

  const getProperties = async () => {
    try {
      const response = await fetch('http://localhost:3600/api/properties',
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
      dispatch(setProperties(json));
      return json;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return { getProperties };
};
