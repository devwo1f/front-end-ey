import { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

function UploadModal() {
  const userName = "abhay";
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
  const currTime = Date.now();

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function uploadFile() {
    let storageAccountName = "feblob";
    let sasToken =
      "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-19T21:57:16Z&st=2021-10-06T13:57:16Z&spr=https&sig=j5DNoN2tAzuTWHRZZrFfqto2ba%2FeYSgt%2Fn87SNIcCw4%3D";
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );

    const containerClient = blobService.getContainerClient("files");
    await containerClient.createIfNotExists({
      access: "container",
    });

    const blobClient = containerClient.getBlockBlobClient(
      userName + "_" + currTime
    );
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    await blobClient.uploadBrowserData(file, options);
  }

  return (
    <>
      <Button variant="primary" className="" onClick={() => setShow(true)}>
        Upload
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upload File
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="file" onChange={onFileChange} />
            <Button
              onClick={() => {
                uploadFile();
              }}
              type="button"
              variant="outline-light"
            >
              Upload
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UploadModal;
