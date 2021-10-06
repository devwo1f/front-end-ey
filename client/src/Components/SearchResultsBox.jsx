import { Row, Col, Badge, CloseButton, Card } from "react-bootstrap";

function SearchResultsBox() {
  return (
    <div className="results">
      <Row xs={2} md={3} className="g-4">
        {Array.from({ length: 20 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://feblob.blob.core.windows.net/files/Abdul Ahad - Photo.jpg"
              />
              <Card.Body>
                <Card.Title>Image</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SearchResultsBox;
