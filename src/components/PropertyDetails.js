import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { FaEdit } from "react-icons/fa";
//import the default avatar of the user
import imgThumblai from "../img/img-thumblai.png";

function PropertyDetails({ property, index }) {
  const handleImageClick = (imageUrl) => {
    Swal.fire({
      imageUrl,
      imageAlt: "Avatar",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
  const [createdAt, setCreatedAt] = useState("00/00/00");

  useEffect(() => {
    const runFunctions = () => {
      const date = new Date(`${property.created_at}`);
      const formattedDate = date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "numeric",
        year: "2-digit",
      });
      setCreatedAt(formattedDate);
    };
    runFunctions();
  }, [setCreatedAt, property]);

  return (
    <tr key={index}>
      <td scope="row">
        <input type="checkbox" />
      </td>
      <td>
        <img
          src={imgThumblai} // Replace with the actual photo URL
          alt="Property Thumbnail"
          className="tm-product-thumbnail"
          width="80px"
          onClick={() => handleImageClick(imgThumblai)}
        />
      </td>
      <td className="tm-product-name">#{index + 1}</td>

      <td className="tm-product-name">{property.title}</td>
      <td className="tm-product-name" style={{ maxWidth: "170px" }}>
        {property.address}
      </td>
      <td className="tm-product-name" style={{ maxWidth: "150px" }}>
        {property.city.quarter}
      </td>

      <td>
        <div
          className="d-flex justify-content-end align-items-center"
          style={{ maxWidth: "80px" }}
        >
          {property.price === 0 ? "********" : property.price}{" "}
          <small className="ml-1 font-weight-bold">Ar</small>
        </div>
      </td>
      <td>
        <div
          className="d-flex justify-content-end align-items-center"
          style={{ maxWidth: "80px" }}
        >
          {property.rent === 0 ? "********" : property.rent}{" "}
          <small className="ml-1 font-weight-bold">Ar</small>
        </div>
      </td>
      <td>{createdAt}</td>
      <td className="tm-product-name" style={{ minWidth: "113px" }}>
        <div className="tm-status-circle cancelled"></div>
        {property.status}
      </td>
      <td>
        <div className="d-flex">
          <a href="#" className="tm-product-delete-link mr-1">
            <FaEdit className="tm-product-delete-icon" />
          </a>
          <a href="#" className="tm-product-delete-link bg-danger">
            <i className="far fa-trash-alt tm-product-delete-icon" />
          </a>
        </div>
      </td>
    </tr>
  );
}

export default PropertyDetails;
