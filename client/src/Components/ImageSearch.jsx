import { Form, Button } from "react-bootstrap";
import FormData from "form-data";
import { useState } from "react";

function ImageSearch() {
  var formdata = new FormData();
  const [file, setFile] = useState();
  formdata.append("image", file);
  const onFileChange = (e) => setFile(e.target.files[0]);
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  function handleClick() {
    fetch("https://eyyolo101.azurewebsites.net/appi", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <form>
      <Form.Group className="mb-3">
        <Form.Control onChange={onFileChange} type="file" />
      </Form.Group>
      <Button onClick={handleClick} type="button">
        Search!
      </Button>
    </form>
  );
}

export default ImageSearch;
