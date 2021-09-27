import { Row, Col, Badge, CloseButton, Card } from "react-bootstrap";

function TagsSearchResultsBox() {
  return (
    <div>
      <Badge bg="warning" text="dark">
        PDF <CloseButton className="closebutton-tags" />
      </Badge>{" "}
      <Badge bg="warning" text="dark">
        Engineering <CloseButton className="closebutton-tags" />
      </Badge>{" "}
      <Badge bg="warning" text="dark">
        Uploaded by me <CloseButton className="closebutton-tags" />
      </Badge>{" "}
    </div>
  );
}

export default TagsSearchResultsBox;
