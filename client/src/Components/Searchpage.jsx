import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button, Stack } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import ImageSearchModal from "./ImageSearchModal";

function Searchpage() {
  return (
    <div>
      <NavbarSearchPage />
      <div className="form">
        <img src={logo1} className="logo22" alt="EY_LOGO" />
        <Stack direction="horizontal" gap={3}>
          <InputGroup className="form-search">
            <FormControl placeholder="Search!" />
          </InputGroup>
          <Button variant="secondary">Search</Button>
          <div className="vr" />
          <ImageSearchModal />
        </Stack>
        <div className="buttons">
          <Filtermodal />{" "}
          <Button variant="secondary" className="broadsearch-button" active>
            Broad Search
          </Button>
        </div>
        <div className="buttons">
          <Button>Browse All</Button>{" "}
          <Button variant="secondary" className="broadsearch-button" active>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
