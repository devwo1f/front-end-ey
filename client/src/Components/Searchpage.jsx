import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import ImageSearch from "./ImageSearch";

function Searchpage() {
  return (
    <div>
      <NavbarSearchPage />
      <div className="form">
        <img src={logo1} className="logo22" alt="EY_LOGO" />
        <InputGroup className="mb-3 form-search">
          <FormControl
            placeholder="Search!"
            aria-label="Search!"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <ImageSearch />
        <div className="buttons">
          <Filtermodal />{" "}
          <Button variant="secondary" className="broadsearch-button" active>
            Broad Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
