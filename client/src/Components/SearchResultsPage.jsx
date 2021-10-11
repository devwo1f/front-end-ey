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
} from "react-bootstrap";
import "../css/sidebar.css";
import DataContext from "../DataContext";
import NavbarCommonAcross from "./NavbarCommonAcross";

function SearchResultsPage() {
  const [video, setVideo] = useState(false);
  const [document, setDocument] = useState(false);
  const [location, setLocation] = useState(false);
  const [department, setDepartment] = useState(false);
  const [uploadedByMe, setUploadedByMe] = useState(false);
  const [text, setText] = useState("");
  var [array, setArray] = useState(["H", "Y"]);
  const { contextArray, setContextArray } = useContext(DataContext);

  array = contextArray;
  console.log(array);

  function toggle(value) {
    return !value;
  }
  async function searchFun() {
    const response = await fetch(
      `http://searchapi102.azurewebsites.net/searchtxt?usr_nm=abd1&upload_me=${uploadedByMe}&loc=${location}&dep=${department}&doc=${document}&vid=${video}&txt_q=${text}`
    );
    const data = await response.json();
    console.log(data);
    setArray(data);
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
            <InputGroup className="mb-3">
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
            <div className="search-results-page">
              <h2>Search results...</h2>
              <Row xs={2} md={3} className="g-4">
                {array.map((image) => (
                  <Col>
                    <Card>
                      <a
                        target="_blank"
                        href={`https://feblob.blob.core.windows.net/files/${image}`}
                      >
                        <Card.Img
                          varian="top"
                          className="images-result"
                          src={`https://feblob.blob.core.windows.net/files/${image}`}
                        />
                      </a>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchResultsPage;
