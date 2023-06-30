import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";

const AccountPage = () => {
const user = useSelector((state) => state.user);

  return (
    <div className="container mt-4">
      <div className="row tm-content-row">
        <div className="col-12 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <h2 className="tm-block-title">List of Accounts</h2>
            <p className="text-white">Accounts</p>
            <select className="custom-select">
              <option value={0}>Select account</option>
              <option value={1}>Admin</option>
              <option value={2}>Editor</option>
              <option value={3}>Merchant</option>
              <option value={4}>Customer</option>
            </select>
          </div>
        </div>
      </div>
      {/* row */}
      {user && <UserProfile/>}
    </div>
  );
};

export default AccountPage;
