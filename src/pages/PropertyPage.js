//import hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

const PropertyPage = () => {
  const { login } = useLogin();

  useEffect(() => {
    const pageLoader = () => {
      login();
    };
    pageLoader();
  }, [login]);

  return (
    <div className="PropertyPage">
      <div className="container mt-4">
        <div className="row tm-content-row">
          <div className="col">
            <div className="tm-bg-primary-dark tm-block tm-block-products">
              <div className="tm-product-table-container">
                <table className="table table-hover tm-table-small tm-product-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">UNIT SOLD</th>
                      <th scope="col">IN STOCK</th>
                      <th scope="col">EXPIRE DATE</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 1</td>
                      <td>1,450</td>
                      <td>550</td>
                      <td>28 March 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 2</td>
                      <td>1,250</td>
                      <td>750</td>
                      <td>21 March 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 3</td>
                      <td>1,100</td>
                      <td>900</td>
                      <td>18 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 4</td>
                      <td>1,400</td>
                      <td>600</td>
                      <td>24 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 5</td>
                      <td>1,800</td>
                      <td>200</td>
                      <td>22 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 6</td>
                      <td>1,000</td>
                      <td>1,000</td>
                      <td>20 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 7</td>
                      <td>500</td>
                      <td>100</td>
                      <td>10 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 8</td>
                      <td>1,000</td>
                      <td>600</td>
                      <td>08 Feb 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">Lorem Ipsum Product 9</td>
                      <td>1,200</td>
                      <td>800</td>
                      <td>24 Jan 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">
                        Lorem Ipsum Product 10
                      </td>
                      <td>1,600</td>
                      <td>400</td>
                      <td>22 Jan 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" />
                      </th>
                      <td className="tm-product-name">
                        Lorem Ipsum Product 11
                      </td>
                      <td>2,000</td>
                      <td>400</td>
                      <td>21 Jan 2019</td>
                      <td>
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* table container */}
              <a
                href="add-product.html"
                className="btn btn-primary btn-block text-uppercase"
              >
                Add new product
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
