import React, { useState } from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';

const ImageUpload = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleUpload = () => {
    setUploadError(null);
    setUploadSuccess(false);
  };

  const handleUploadSuccess = (response) => {
    setUploadSuccess(true);
    // You can perform additional actions after a successful upload if needed
  };

  const handleUploadError = (error) => {
    setUploadError(error);
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <IKContext
        publicKey="public_vlrRA+yMUPV8sLRnpirwSsUA2hw="
        urlEndpoint="/sary"
        authenticationEndpoint="http://localhost:3600/auth"
      >
        {/* Image upload */}
        <IKUpload
          fileName="my-upload"
          onError={handleUploadError}
          onSuccess={handleUploadSuccess}
        />
      </IKContext>

      {uploadSuccess && <p>Upload successful!</p>}
      {uploadError && <p>Error uploading image: {uploadError.message}</p>}
    </div>
  );
};

export default ImageUpload;
