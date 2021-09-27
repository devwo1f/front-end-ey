import { Form } from "react-bootstrap";

function SidebarFilters() {
  return (
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
  );
}

export default SidebarFilters;
