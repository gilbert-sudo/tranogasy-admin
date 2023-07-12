import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setSuccessUploading, setUploadMode } from "../redux/redux";

import Swal from "sweetalert2";
import { ImZoomIn } from "react-icons/im";
import AvatarUploader from "../components/AvatarUploader";

//import the default avatar of the user
import userAvatar from "../img/user-avatar.png";

const ProfilPage = () => {
  const user = useSelector((state) => state.user);
  const pagination = useSelector((state) => state.pagination);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  //redux dispatcher
  const dispatch = useDispatch();

  const handleImageClick = (imageUrl) => {
    Swal.fire({
      imageUrl,
      imageAlt: "Avatar",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  useEffect(() => {
    if (pagination[3].successUploading && !pagination[3].uploadMode) {
      setErrorMessageVisible(true);
      setTimeout(() => {
        setErrorMessageVisible(false);
      }, 4000); // Hide error message after 3 seconds
    }
  }, [pagination[3]]);

  return (
    <div className="container mt-4">
      <div className="row tm-content-row">
        <div className="tm-block-col tm-col-avatar">
          <div className="tm-bg-primary-dark tm-block tm-block-avatar">
            <h2 className="tm-block-title">Photo de profil</h2>
            <div className="tm-avatar-container">
              <img
                src={user.avatar ? user.avatar : userAvatar}
                alt="Avatar"
                className="tm-avatar img-fluid mb-4"
                onClick={() => handleImageClick(user.avatar)}
              />
              <div
                className="tm-avatar-delete-link"
                onClick={() => handleImageClick(user.avatar)}
              >
                <ImZoomIn className="tm-product-delete-icon" />
              </div>
            </div>
            {pagination[3].uploadMode && (
                <AvatarUploader user={user} />
            )}{" "}
            {!pagination[3].uploadMode && (
              <button
                onClick={() => {
                  const confirmed = window.confirm(
                    "Voulez-vous vraiment changer votre photo de profil ?"
                  );
                  if (confirmed) {
                    dispatch(setUploadMode(true));
                    dispatch(setSuccessUploading(false));
                  }
                }}
                className="btn btn-primary btn-block text-uppercase"
              >
                Modifier la photo
              </button>
            )}
            {errorMessageVisible &&
              pagination[3].successUploading &&
              !pagination[3].uploadMode && (
                <div className="alert alert-success mt-1" role="alert">
                  Téléchargement réussi !
                </div>
              )}
          </div>
        </div>
        <div className="tm-block-col tm-col-account-settings">
          <div className="tm-bg-primary-dark tm-block tm-block-settings">
            <h2 className="tm-block-title">Détails du compte</h2>
            <form action="" className="tm-signup-form row">
              <div className="form-group col-lg-6">
                <label htmlFor="name">
                  <small>Nom</small>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control validate"
                  value={user.name}
                  disabled
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control validate"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="phone">
                  <small>Téléphone</small>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control validate"
                  value={user.phone}
                  disabled
                />
              </div>
              <div className="form-group col-lg-6">
                <label className="tm-hide-sm">&nbsp;</label>
                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase"
                >
                  Editer votre profil
                </button>
              </div>
              <div className="col-12 mt-5">
                <button
                  type="submit"
                  className="btn btn-danger btn-block text-uppercase"
                >
                  Supprimer votre compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
