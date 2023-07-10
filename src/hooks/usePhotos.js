import { useDispatch } from "react-redux";
import { setUser } from "../redux/redux";

export const usePhotos = () => {
  const dispatch = useDispatch();

  const updateAvatar = async (user, response) => {
    console.log(user, response.url);
    const newAvatar = response.url;
    try {
      const response = await fetch(
        `http://localhost:3600/api/admins/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            phone: user.phone,
            avatar: newAvatar,
          }),
        }
      );

      const json = await response.json();
      if (response.ok) {
        console.log(json.admin);
        dispatch(setUser(json.admin));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { updateAvatar };
};
