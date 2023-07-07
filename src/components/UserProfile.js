const UserProfile = () => {
  return (
    <div className="row tm-content-row">
      <div className="tm-block-col tm-col-avatar">
        <div className="tm-bg-primary-dark tm-block tm-block-avatar">
          <h2 className="tm-block-title">Change Avatar</h2>
          <div className="tm-avatar-container">
            <img
              src="https://ik.imagekit.io/ryxb55mhk/Tranogasy/my-photos"
              alt="Avatar"
              className="tm-avatar img-fluid mb-4"
            />
            <a href="#" className="tm-avatar-delete-link">
              <i className="far fa-trash-alt tm-product-delete-icon" />
            </a>
          </div>
          <button className="btn btn-primary btn-block text-uppercase">
            Upload New Photo
          </button>
        </div>
      </div>
      <div className="tm-block-col tm-col-account-settings">
        <div className="tm-bg-primary-dark tm-block tm-block-settings">
          <h2 className="tm-block-title">Account Settings</h2>
          <form action="" className="tm-signup-form row">
            <div className="form-group col-lg-6">
              <label htmlFor="name">Account Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control validate"
              />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="email">Account Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control validate"
              />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control validate"
              />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="password2">Re-enter Password</label>
              <input
                id="password2"
                name="password2"
                type="password"
                className="form-control validate"
              />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-control validate"
              />
            </div>
            <div className="form-group col-lg-6">
              <label className="tm-hide-sm">&nbsp;</label>
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase"
              >
                Update Your Profile
              </button>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase"
              >
                Delete Your Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
