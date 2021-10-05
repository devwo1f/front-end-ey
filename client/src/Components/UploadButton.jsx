import { Button, Form } from "react-bootstrap";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { display } from "@mui/system";
import { useState } from "react";

function UploadButton() {
  const [file, setFile] = useState();

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function uploadFile() {
    let storageAccountName = "feblob";
    let sasToken =
      "sv=2020-08-04&ss=b&srt=sco&sp=rwlactfx&se=2021-10-05T22:39:35Z&st=2021-10-05T14:39:35Z&spr=https&sig=T00lCwU%2FVrC5fI7l%2FRoUV6puQn29aaMPEIDqASPGP2E%3D";
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );

    const containerClient = blobService.getContainerClient("files");
    await containerClient.createIfNotExists({
      access: "container",
    });

    const blobClient = containerClient.getBlockBlobClient(file.name);
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    await blobClient.uploadBrowserData(file, options);
  }
  return (
    <form>
      <input type="file" onChange={onFileChange} multiple />
      <Button
        onClick={() => {
          uploadFile();
        }}
        type="file"
        variant="outline-light"
      >
        Upload
      </Button>
    </form>
  );
}

export default UploadButton;