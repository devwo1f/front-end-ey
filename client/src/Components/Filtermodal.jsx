import React from "react";
import { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import "../css/filtermodal.css";

function Filtermodal() {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState(false);
  const [document, setDocument] = useState(false);
  const [location, setLocation] = useState(false);
  const [department, setDepartment] = useState(false);
  const [uploadedByMe, setUploadedByMe] = useState(false);

  function toggle(value) {
    return !value;
  }

  function searchFun() {
    const response = `http://127.0.0.1:5000/searchtxt?usr_nm=abd1&upload_me=${uploadedByMe}&loc=${location}&dep=${department}&doc=${document}&vid=${video}&txt_q=cat`;
    console.log(response);
  }

  return (
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
                  <Form.Check onChange={() => setVideo(toggle)} label="Video" />
                  <Form.Check
                    onChange={() => setDocument(toggle)}
                    label="Document"
                  />
                  <br />
                </Col>
                <Col xs={9} md={6}>
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
    </>
  );
}

export default Filtermodal;
