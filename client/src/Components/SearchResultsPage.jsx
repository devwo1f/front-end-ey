import { Container, Row, Col } from "react-bootstrap";
import "../css/sidebar.css";
import NavbarCommonAcross from "./NavbarCommonAcross";
import SearchResultsBox from "./SearchResultsBox";
import SidebarFilters from "./SidebarFilters";

function SearchResultsPage() {
  return (
    <div>
      <NavbarCommonAcross />
      <Container>
        <Row>
          <Col sm={2}>
            <br />
            <SidebarFilters />
          </Col>
          <Col sm={10}>
            <br />
            <div className="search-results-page">
              <h2>Search results...</h2>
              <SearchResultsBox />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchResultsPage;
