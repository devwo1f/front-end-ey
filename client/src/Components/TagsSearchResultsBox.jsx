import React, { useState } from "react";
import { Row, Col, Badge, CloseButton, Card } from "react-bootstrap";

function TagsSearchResultsBox() {
  return (
    <div>
      <Badge bg="warning" text="dark">
        PDF
      </Badge>{" "}
      <Badge bg="warning" text="dark">
        Engineering
      </Badge>{" "}
      <Badge bg="warning" text="dark">
        Uploaded by me
      </Badge>{" "}
    </div>
  );
}

export default TagsSearchResultsBox;
