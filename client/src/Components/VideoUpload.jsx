import { useState } from "react";
import { Form, Stack, Button } from "react-bootstrap";
import { BlobServiceClient } from "@azure/storage-blob";

function VideoUpload() {
  const userName = "abhay";
  const [file, setFile] = useState();
  const currTime = Date.now();
  const fileName = userName + "_" + currTime;

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function uploadFile() {
    let storageAccountName = "feblob";
    let sasToken =
      "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-19T21:57:16Z&st=2021-10-06T13:57:16Z&spr=https&sig=j5DNoN2tAzuTWHRZZrFfqto2ba%2FeYSgt%2Fn87SNIcCw4%3D";
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );

    const containerClient = blobService.getContainerClient("videos");
    await containerClient.createIfNotExists({
      access: "container",
    });

    const blobClient = containerClient.getBlockBlobClient(fileName);
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    await blobClient.uploadBrowserData(file, options);
  }

  return (
    <div>
      <br />
      <h6>Select a video to be uploaded</h6>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="formFile" className="">
          <Form.Control onChange={onFileChange} type="file" />
        </Form.Group>
        <div className="vr" />
        <Button
          variant="outline-dark"
          onClick={() => {
            uploadFile();
          }}
        >
          Upload
        </Button>
      </Stack>
    </div>
  );
}

export default VideoUpload;
