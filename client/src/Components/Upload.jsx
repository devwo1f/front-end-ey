import React from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import "../css/Upload.css";
import ImageUpload from "./ImageUpload";
import FileUpload from "./FileUpload";
import VideoUpload from "./VideoUpload";
import NavbarCommonAcross from "./NavbarCommonAcross";
import "../css/navbarsearchpage.css";

function Upload() {
  const userName = sessionStorage.getItem("username");
  const currTime = Date.now();
  const fileName = userName + "_" + currTime;
  return (
    <div>
      <NavbarCommonAcross />
      <Container className="upload-page">
        <h1 className="upload-heading">UPLOAD</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Image Upload</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">File Upload</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Video Upload</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h2>Image Upload</h2>
                  <ImageUpload filename={fileName} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h2>File Upload</h2>
                  <FileUpload />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h2>Video Upload</h2>
                  <VideoUpload />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Upload;
