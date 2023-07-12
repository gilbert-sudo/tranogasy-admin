import { useProperty } from "../hooks/useProperty";
import { useEffect } from "react";
import { useSelector } from "react-redux";


import PropertyDetails from "../components/PropertyDetails";


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
                <thead className="sticky-top">
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">PHOTO</th>
                    <th scope="col">N°</th>
                    <th scope="col">TITRE</th>
                    <th scope="col">ADRESSE</th>
                    <th scope="col">QUARTIER</th>
                    <th scope="col">PRIX</th>
                    <th scope="col">LOYER</th>
                    <th scope="col">DATE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {properties &&
                    properties.map((property, index) => (
                      <PropertyDetails index={index} property={property} />
                    ))}
                </tbody>
              </table>
            </div>
            <a
              href="add-product.html"
              className="btn btn-primary btn-block text-uppercase mt-5"
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
