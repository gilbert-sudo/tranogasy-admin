import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import { ImZoomIn } from "react-icons/im";
import AvatarUpload from "../components/AvatarUpload";

const ProfilPage = () => {
  const user = useSelector((state) => state.user);
  const [uploadMode, setUploadMode] = useState(false);

  const handleImageClick = (imageUrl) => {
    Swal.fire({
      imageUrl,
      imageAlt: "Avatar",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <div className="container mt-4">
      <div className="row tm-content-row">
        <div className="tm-block-col tm-col-avatar">
          <div className="tm-bg-primary-dark tm-block tm-block-avatar">
            <h2 className="tm-block-title">Photo de profil</h2>
            <div className="tm-avatar-container">
              <img
                src={user.avatar}
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
            {uploadMode ? (
              <>
                {" "}
                <AvatarUpload />{" "}
                <button
                  onClick={() => setUploadMode(false)}
                  className="btn btn-danger btn-block text-uppercase"
                >
                  Annuler
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  const confirmed = window.confirm(
                    "Voulez-vous vraiment changer votre photo de profil ?"
                  );
                  if (confirmed) {
                    setUploadMode(true);
                  }
                }}
                className="btn btn-primary btn-block text-uppercase"
              >
                Modifier la photo
              </button>
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
