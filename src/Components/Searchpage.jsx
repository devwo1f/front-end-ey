import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Filtermodal from "./Filtermodal";

function Searchpage() {
  return (
    <div className="form">
      <img src={logo1} className="logo22" alt="EY_LOGO" />
      <InputGroup className="mb-3 form-search">
        <FormControl
          placeholder="Search!"
          aria-label="Search!"
          aria-describedby="basic-addon2"
        />
        <form>
          <Button variant="outline-secondary" id="button-addon2">
            Image
          </Button>
        </form>
      </InputGroup>
      <div className="buttons">
        <Filtermodal />{" "}
        <Button variant="secondary" className="broadsearch-button" active>
          Broad Search
        </Button>
      </div>
    </div>
  );
}

export default Searchpage;
