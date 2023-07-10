import React, { useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { usePhotos } from "../hooks/usePhotos";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessUploading, setUploadMode } from "../redux/redux";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const AvatarUploader = (user) => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const pagination = useSelector((state) => state.pagination);
  const [uploadError, setUploadError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { updateAvatar } = usePhotos();
  const dispatch = useDispatch();

  const override = css`
    display: block;
    margin-top: 5px;
    border-color: red;
  `;

  const handleUploadSuccess = (response) => {
    updateAvatar(user, response);
    setUploadSuccess(true);
    dispatch(setSuccessUploading(true));
    dispatch(setUploadMode(false));
    setIsUploading(false);
    console.log("uploading was success");
  };

  const handleUploadError = (error) => {
    setUploadError(error);
    setIsUploading(false);
  };

  const handleUploading = () => {
    setIsUploading(true);
  };

  return (
    <>
      <div className="form-group">
        <IKContext
          publicKey="public_vlrRA+yMUPV8sLRnpirwSsUA2hw="
          urlEndpoint="https://ik.imagekit.io/ryxb55mhk/"
          authenticationEndpoint="https://vast-erin-monkey-cape.cyclic.app/auth"
        >
          <IKUpload
            fileName="tg-pic"
            folder="Tranogasy/properties"
            onError={handleUploadError}
            onSuccess={handleUploadSuccess}
            className="btn btn-primary btn-block text-uppercase form-control"
            onChange={handleUploading}
            disabled={isUploading}
          />
        </IKContext>

        {isUploading && (
          <div className="loader-container d-flex align-items-center justify-content-center">
            <BarLoader
              css={override}
              size={50}
              height={9}
              color={"#f5a623"}
              loading={isUploading}
            />{" "}
            <strong className="ml-2" style={{color:"#f5a623"}}>Importation en cours...</strong>
          </div>
        )}

        {uploadSuccess && (
          <div className="alert alert-success mt-1" role="alert">
            Téléchargement réussi !
          </div>
        )}
        {uploadError && (
          <div className="alert alert-danger mt-1" role="alert">
            Erreur lors de l'envoi de l'image: {uploadError.message}
          </div>
        )}
      </div>
      {pagination[3].uploadMode && !isUploading && (
        <button
          onClick={() => dispatch(setUploadMode(false))}
          className="btn btn-danger btn-block text-uppercase"
        >
          Annuler
        </button>
      )}
    </>
  );
};

export default AvatarUploader;
