// import { useDispatch } from "react-redux";
// import { setProperties } from "../redux/redux";

export const usePhotos = () => {

//   const dispatch = useDispatch();

  const updateAvatar = async (user, response) => {
    console.log(user, response);
    // try {
    //   const response = await fetch(`http://localhost:3600/api/admins/${user._id}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //   );

    //   const json = await response.json();
    //   console.log(json);
    //   return json;
    // } catch (error) {
    //   console.log(error);
    //   return null;
    // }
  };
  return { updateAvatar };
};
