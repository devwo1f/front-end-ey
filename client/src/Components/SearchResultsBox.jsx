import { Card, Row, Col } from "react-bootstrap";
import "../css/resultbox.css";

function SearchResultsBox() {
  const array = [
    "abhay_1633553219521",
    "abhay_1633553245079",
    "abhay_1633609356186",
    "abhay_1633609364441",
    "abhay_1633609371718",
    "abhay_1633609379696",
    "abhay_1633609403844",
    "abhay_1633609418418",
    "abhay_1633609428032",
    "abhay_1633609435970",
    "abhay_1633609444222",
  ];
  return (
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
  );
}

export default SearchResultsBox;
