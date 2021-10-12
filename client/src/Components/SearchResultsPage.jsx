import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
  Card,
  Stack,
  Modal,
  Breadcrumb,
} from "react-bootstrap";
import "../css/sidebar.css";
import NavbarCommonAcross from "./NavbarCommonAcross";
import { BlobServiceClient } from "@azure/storage-blob";

function SearchResultsPage(props) {
  const [video, setVideo] = useState(false);
  const [document, setDocument] = useState(false);
  const [location, setLocation] = useState(false);
  const [department, setDepartment] = useState(false);
  const [uploadedByMe, setUploadedByMe] = useState(false);
  const [text, setText] = useState("");
  var [array, setArray] = useState(["abhay_1633949614301"]);
  const handleShow1 = () => setShow1(true);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow1(false);
  const [file, setFile] = useState();

  const userName = sessionStorage.getItem("username");

  console.log(array);

  function toggle(value) {
    return !value;
  }

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function handleClick() {
    const currTime = Date.now();
    const fileName = userName + "_" + currTime;
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
      `http://searchapi104.azurewebsites.net/searchimg?usr_nm=${userName}&upload_me=False&loc=False&dep=False&img_url=https://feblob.blob.core.windows.net/uploads/${fileName}`
    );
    // const data = response.json();
    console.log(response);
  }

  async function searchFun() {
    const response = await fetch(
      `http://searchapi102.azurewebsites.net/searchtxt?usr_nm=${userName}&upload_me=${uploadedByMe}&loc=${location}&dep=${department}&doc=${document}&vid=${video}&txt_q=${text}`
    );
    console.log(response);
    setArray(response);
  }
  return (
    <div>
      <NavbarCommonAcross />
      <Container>
        <Row>
          <Col sm={2}>
            <br />
            {/* Side Bars */}
            <div className="sidebar-div">
              <h2>Filters</h2>
              <Form.Label>
                <span className="filter-headings">Type:</span>
              </Form.Label>
              <Form.Label>
                <span className="filter-headings">Type:</span>
              </Form.Label>
              <Form.Check onChange={() => setVideo(toggle)} label="Video" />
              <Form.Check
                onChange={() => setDocument(toggle)}
                label="Document"
              />
              <br />
              <Form.Label>
                <span className="filter-headings">Additional Filters:</span>
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
            </div>
          </Col>
          <Col sm={10}>
            <br />
            <Stack direction="horizontal" gap={3}>
              <InputGroup className=" searchpage-text">
                <FormControl
                  placeholder="Search"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  variant="outline-warning"
                  onClick={searchFun}
                  id="button-addon2"
                >
                  Search
                </Button>
              </InputGroup>

              <Button variant="outline-primary" onClick={handleShow1}>
                Image
              </Button>
            </Stack>
            <div className="search-results-page">
              <h2>Search results...</h2>
              <Row xs={2} md={3} className="g-4">
                {array.map((image) => (
                  <Col>
                    <Card>
                      <a
                        target="_blank"
                        href={`https://feblob.blob.core.windows.net/uploads/${image}`}
                      >
                        <Card.Img
                          varian="top"
                          className="images-result"
                          src={`https://feblob.blob.core.windows.net/uploads/${image}`}
                        />
                      </a>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
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
      </Container>
    </div>
  );
}

export default SearchResultsPage;
