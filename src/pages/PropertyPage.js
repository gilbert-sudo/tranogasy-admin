//import hooks
import { useProperty } from "../hooks/useProperty";
import { useEffect } from "react";

//import redux store
import { useSelector } from "react-redux";

const PropertyPage = () => {
  const { getProperties } = useProperty();
  const properties = useSelector((state) => state.properties);

  useEffect(() => {
    if (!properties) {
      const pageLoader = async () => {
        await getProperties();
      };
      pageLoader();
    }
  }, [properties]);

  return (
    <div className="PropertyPage">
      <div className="row tm-content-row">
        <div className="col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            <div className="tm-product-table-container">
              <table className="table table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">TITRE DE L'ARTICLE</th>
                    <th scope="col">ADRESSE</th>
                    <th scope="col">QUARTIER</th>
                    <th scope="col">PRIX (Ar)</th>
                    <th scope="col">LOYER (Ar)</th>
                    <th scope="col">DATE D'ENREGISTREMENT</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {properties &&
                    properties.map((property) => (
                      <tr>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td className="tm-product-name">{property.title}</td>
                        <td className="tm-product-name">{property.address}</td>
                        <td className="tm-product-name">{property.city.quarter}</td>
                        <td>{property.price}</td>
                        <td>{property.rent}</td>
                        <td>28 March 2019</td>
                        <td>
                          <a href="#" className="tm-product-delete-link">
                            <i className="far fa-trash-alt tm-product-delete-icon" />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* table container */}
            <a
              href="add-product.html"
              className="btn btn-primary btn-block text-uppercase"
            >
              Ajouter une nouvelle propriété
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
