import { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import "../css/filtermodal.css";

function Filtermodal() {
  const [show, setShow] = useState(false);

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
                  <Form.Check label="PDF" />
                  <Form.Check label="Video" />
                  <Form.Check label="Document" />
                  <Form.Check label="Image" />
                </Col>
                <Col xs={9} md={6}>
                  <Form.Label>
                    <span className="filter-headings">Additional Filters:</span>
                  </Form.Label>
                  <Form.Check label="Uploaded By me" />
                  <Form.Check label="Only Objects" />
                  <Form.Check label="Only Text" />
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Filtermodal;
