import React, { useState, useContext } from "react";
import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import {
  InputGroup,
  FormControl,
  Button,
  Stack,
  Modal,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCommonAcross from "./NavbarCommonAcross";
import { BlobServiceClient } from "@azure/storage-blob";
import { UserContext } from "../UserContext";

function Searchpage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show1, setShow1] = useState(false);
  const [video, setVideo] = useState(false);
  const [document, setDocument] = useState(false);
  const [location, setLocation] = useState(false);
  const [department, setDepartment] = useState(false);
  const [uploadedByMe, setUploadedByMe] = useState(false);

  function toggle(value) {
    return !value;
  }

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
  function searchFun() {
    const response = `http://127.0.0.1:5000/searchtxt?usr_nm=abd1&upload_me=${uploadedByMe}&loc=${location}&dep=${department}&doc=${document}&vid=${video}&txt_q=cat`;
    console.log(response);
  }
  return (
    <div>
      <NavbarCommonAcross />
      <div className="form">
        <img src={logo1} className="logo22" alt="EY_LOGO" />
        <Stack direction="horizontal" gap={3}>
          <InputGroup className="form-search">
            <FormControl placeholder="Search!" />
          </InputGroup>
          <div className="vr" />
          <>
            <Button variant="outline-warning" onClick={handleShow1}>
              Image
            </Button>

            <Modal show={show1} onHide={handleClose}>
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
        </Stack>
        <Stack
          className="searchpage-button-stack"
          direction="horizontal"
          gap={3}
        >
          <div className="buttons">
            <>
              <Button
                variant="primary"
                className="narrowsearch-button"
                onClick={() => setShow(true)}
              >
                Narrow Search
              </Button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Narrow Search Filters
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Form>
                      <Row>
                        <Col xs={9} md={6}>
                          <Form.Label>
                            <span className="filter-headings">Type:</span>
                          </Form.Label>
                          <Form.Check
                            onChange={() => setVideo(toggle)}
                            label="Video"
                          />
                          <Form.Check
                            onChange={() => setDocument(toggle)}
                            label="Document"
                          />
                          <br />
                        </Col>
                        <Col xs={9} md={6}>
                          <Form.Label>
                            <span className="filter-headings">
                              Additional Filters:
                            </span>
                          </Form.Label>
                          <Form.Check
                            onChange={() => setLocation(toggle)}
                            label="My Location"
                          />
                          <Form.Check
                            onChange={() => setDepartment(toggle)}
                            label="My Department"
                          />
                          <Form.Check
                            onChange={() => setUploadedByMe(toggle)}
                            label="Uploaded By Me"
                          />
                        </Col>
                      </Row>
                      <br />
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={searchFun}
                          className="narrowsearch-button"
                        >
                          Search!
                        </Button>
                      </Modal.Footer>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>
            </>{" "}
            <Button variant="secondary" className="broadsearch-button" active>
              Broad Search
            </Button>
          </div>
          <div className="vr" />
          <div className="buttons">
            <Button>Browse All</Button>{" "}
            <Link to="/upload">
              <Button variant="secondary" className="broadsearch-button" active>
                Upload
              </Button>
            </Link>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Searchpage;
