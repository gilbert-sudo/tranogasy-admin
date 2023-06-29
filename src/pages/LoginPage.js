import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber, password);
  };
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .passview {\n      border-radius: 10px;\n      font-size: medium;\n      width: 200px;\n    }\n\n    .passview-on {\n      background-color: #f5a623;\n      color: white;\n    }\n\n\n    /* ==============================\n         TOGGLE SWITCH UI BUTTON\n    =============================== */\n    .toggle-1 {\n      font-family: Arial, Helvetica, sans-serif;\n      display: inline-block;\n      vertical-align: top;\n      margin: 15px;\n    }\n\n    .toggle-1__input {\n      display: none;\n    }\n\n    .toggle-1__button {\n      position: relative;\n      display: inline-block;\n      font-size: 1rem;\n      line-height: 20px;\n      text-transform: uppercase;\n      background-color: #e6e6e6;\n      border: solid 2px black;\n      color: while;\n      width: 65px;\n      height: 32px;\n      transition: all 0.3s ease;\n      cursor: pointer;\n    }\n\n    .toggle-1__button::before {\n      position: absolute;\n      top: 4px;\n      left: 18px;\n      content: "off";\n      height: 20px;\n      padding: 0 3px;\n      background: white;\n      color: #f5a623;\n      border: 0.5px solid #f5a623;\n      transition: all 0.3s ease;\n    }\n\n    .toggle-1__input:checked+.toggle-1__button {\n      background-color: #f5a623;\n      border: solid 2px black;\n    }\n\n    .toggle-1__input:checked+.toggle-1__button::before {\n      left: 5px;\n      content: "on";\n      color: #f5a623;\n      width: 30px;\n    }\n  ',
        }}
      />
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">
                  Bienvenue admin, Connexion.
                  </h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <form
                    action="index.html"
                    method="post"
                    className="tm-login-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="username">Phone number</label>
                      <input
                        value={phoneNumber}
                        name="username"
                        type="text"
                        className="form-control validate"
                        id="username"
                        defaultValue=""
                        required=""
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="password">Password</label>
                      <input
                        value={password}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="form-control validate"
                        id="password"
                        defaultValue=""
                        required=""
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="d-flex align-items-center">
                        <label htmlFor="toggle1" className="toggle-1">
                          <input
                            type="checkbox"
                            name="loggout"
                            id="toggle1"
                            className="toggle-1__input"
                            onChange={() => setShowPassword(!showPassword)}
                          />
                          <span className="toggle-1__button"></span>
                        </label>
                        <small className="text-white">
                          Afficher le mot de passe.
                        </small>
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase"
                      >
                        Login
                      </button>
                      <br />
                      <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
