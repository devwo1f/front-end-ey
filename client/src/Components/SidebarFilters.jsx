import React from "react";
import { Form } from "react-bootstrap";

function SidebarFilters() {
  return (
    <div className="sidebar-div">
      <h2>Filters</h2>
      <Form.Label>
        <span className="filter-headings">Type:</span>
      </Form.Label>
      <Form.Check name="PDF" label="PDF" />
      <Form.Check name="Video" label="Video" />
      <Form.Check name="Document" label="Document" />
      <Form.Check name="Image" label="Image" />
      <br />
      <Form.Label>
        <span className="filter-headings">Department:</span>
      </Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Department</option>
        <option name="Engineering" value="1">
          Engineering
        </option>
        <option name="Accounts" value="2">
          Accounts
        </option>
        <option name="Finance" value="3">
          Finance
        </option>
        <option name="Public Relations" value="3">
          Public Relations
        </option>
      </Form.Select>
      <br />
      <Form.Label>
        <span className="filter-headings">Additional Filters:</span>
      </Form.Label>
      <Form.Check name="Uploaded by me" label="Uploaded By me" />
      <Form.Check name="Only Objects" label="Only Objects" />
      <Form.Check name="Only Text" label="Only Text" />
    </div>
  );
}

export default SidebarFilters;
