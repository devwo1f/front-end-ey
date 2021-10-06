import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/searchpage.css";
import logo1 from "../Assets/ey-logo.png";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import Filtermodal from "./Filtermodal";
import NavbarSearchPage from "./NavbarSearchPage";
import UploadModal from "./UploadModal";
import FormData from "form-data";
import { useState } from "react";

function Searchpage() {
  const [file, setFile] = useState();
  var formdata = new FormData();
  var myHeaders = new Headers();
  const onFileChange = (e) => setFile(e.target.files[0]);
  formdata.append("image", file);
  myHeaders.append(
    "Cookie",
    "ARRAffinity=184b93d9bd44b3d34ffbdb54e8c0a88f58a67edb02b538a38e803ce6c23758f2; ARRAffinitySameSite=184b93d9bd44b3d34ffbdb54e8c0a88f58a67edb02b538a38e803ce6c23758f2"
  );

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  function fetchApi() {
    fetch("https://eyyolo101.azurewebsites.net/appi", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

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
          <input type="file" onChange={onFileChange} name="picture" />
          <button onClick={fetchApi} type="button">
            Submit
          </button>
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
