import React from "react";
import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button, Stack } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import ImageSearchModal from "./ImageSearchModal";
import { Link } from "react-router-dom";

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
          <div className="vr" />
          <ImageSearchModal />
        </Stack>
        <Stack
          className="searchpage-button-stack"
          direction="horizontal"
          gap={3}
        >
          <div className="buttons">
            <Filtermodal />{" "}
            <Button variant="secondary" className="broadsearch-button" active>
              Broad Search
            </Button>
          </div>
          <div className="vr" />
          <div className="buttons">
            <Button>Browse All</Button>{" "}
            <Link to="/upload">
              <Button variant="secondary" className="broadsearch-button" active>
                Upload
              </Button>
            </Link>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Searchpage;
