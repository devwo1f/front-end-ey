import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Input } from "@mui/icons-material";

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
          <form>
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </form>
        </InputGroup>
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
