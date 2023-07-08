import React, { useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const AvatarUpload = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleUploadSuccess = (response) => {
    setUploadSuccess(true);
    console.log(response);
    // You can perform additional actions after a successful upload if needed
  };

  const handleUploadError = (error) => {
    setUploadError(error);
  };

  return (
    <div className="form-group">
      <IKContext
        publicKey="public_vlrRA+yMUPV8sLRnpirwSsUA2hw="
        urlEndpoint="https://ik.imagekit.io/ryxb55mhk/"
        authenticationEndpoint="https://vast-erin-monkey-cape.cyclic.app/auth"
      >
        {/* Image upload */}
        <IKUpload
          fileName="tg-pic"
          folder="Tranogasy/properties"
          onError={handleUploadError}
          onSuccess={handleUploadSuccess}
          className="btn btn-primary btn-block text-uppercase form-control"
        />
      </IKContext>

      {uploadSuccess && <p>Upload successful!</p>}
      {uploadError && <p>Error uploading image: {uploadError.message}</p>}
    </div>
  );
};

export default AvatarUpload;
