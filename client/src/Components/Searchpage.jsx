import { useForm } from "react-hook-form";
import fs from "fs";
import axios from "axios";
import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import UploadModal from "./UploadModal";

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
        <form>
          <input type="file" name="picture" />
          <button>Submit</button>
        </form>
        <div className="buttons">
          <Filtermodal />{" "}
          <Button variant="secondary" className="broadsearch-button" active>
            Broad Search
          </Button>
          <UploadModal />
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
