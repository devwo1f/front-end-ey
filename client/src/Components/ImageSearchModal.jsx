import React from "react";
import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormData from "form-data";
import { BlobServiceClient } from "@azure/storage-blob";
import { UserContext } from "../UserContext";

function ImageSearchModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { value } = useContext(UserContext);
  const userName = value;
  const [file, setFile] = useState();
  const currTime = Date.now();
  const fileName = userName + "_" + currTime;

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function handleClick() {
    let storageAccountName = "feblob";
    let sasToken =
      "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-19T21:57:16Z&st=2021-10-06T13:57:16Z&spr=https&sig=j5DNoN2tAzuTWHRZZrFfqto2ba%2FeYSgt%2Fn87SNIcCw4%3D";
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );

    const containerClient = blobService.getContainerClient("search");
    await containerClient.createIfNotExists({
      access: "container",
    });

    const blobClient = containerClient.getBlockBlobClient(fileName);
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    await blobClient.uploadBrowserData(file, options);

    const response = await fetch(
      `http://searchapi102.azurewebsites.net/searchimg?usr_nm=abd1&upload_me=False&loc=False&dep=False&img_url=http://getimgdata.azurewebsites.net/imgdata?img_url=https://feblob.blob.core.windows.net/uploads/${fileName}`
    );
    // const data = response.json();
    console.log(response);
  }

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Image Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload image for Search</Form.Label>
            <Form.Control onChange={onFileChange} type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} variant="warning">
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageSearchModal;
