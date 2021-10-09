import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormData from "form-data";

function ImageSearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var formdata = new FormData();
  const [file, setFile] = useState();
  formdata.append("image", file);
  const onFileChange = (e) => setFile(e.target.files[0]);
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  function handleClick() {
    fetch("https://eyyolo101.azurewebsites.net/appi", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
