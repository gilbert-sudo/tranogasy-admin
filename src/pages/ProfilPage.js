import { useSelector } from "react-redux";

const ProfilPage = () => {
  const user = useSelector((state) => state.user);

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
              />
              <a href="#" className="tm-avatar-delete-link">
                <i className="far fa-trash-alt tm-product-delete-icon" />
              </a>
            </div>
            <button className="btn btn-primary btn-block text-uppercase">
              Changer la photo
            </button>
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
