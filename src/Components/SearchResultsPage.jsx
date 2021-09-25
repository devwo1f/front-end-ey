import {
  Container,
  Row,
  Col,
  Form,
  Badge,
  CloseButton,
  Card,
} from "react-bootstrap";
import "../css/sidebar.css";
import NavbarCommonAcross from "./NavbarCommonAcross";

function SearchResultsPage() {
  return (
    <div>
      <NavbarCommonAcross />
      <Container>
        <Row>
          <Col sm={2}>
            <br />
            <div className="sidebar-div">
              <h2>Filters</h2>
              <Form.Label>
                <span className="filter-headings">Type:</span>
              </Form.Label>
              <Form.Check label="PDF" />
              <Form.Check label="Video" />
              <Form.Check label="Document" />
              <Form.Check label="Image" />
              <br />
              <Form.Label>
                <span className="filter-headings">Department:</span>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Department</option>
                <option value="1">Engineering</option>
                <option value="2">Accounts</option>
                <option value="3">Finance</option>
                <option value="3">Public Relations</option>
              </Form.Select>
              <br />
              <Form.Label>
                <span className="filter-headings">Additional Filters:</span>
              </Form.Label>
              <Form.Check label="Uploaded By me" />
              <Form.Check label="Only Objects" />
              <Form.Check label="Only Text" />
            </div>
          </Col>
          <Col sm={10}>
            <br />
            <div className="search-results-page">
              <h2>Search results...</h2>
              <Badge bg="warning" text="dark">
                PDF <CloseButton className="closebutton-tags" />
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                Engineering <CloseButton className="closebutton-tags" />
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                Uploaded by me <CloseButton className="closebutton-tags" />
              </Badge>{" "}
              <div className="results">
                <Row xs={2} md={3} className="g-4">
                  {Array.from({ length: 20 }).map((_, idx) => (
                    <Col>
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://source.unsplash.com/random/800x800"
                        />
                        <Card.Body>
                          <Card.Title>Image</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchResultsPage;
