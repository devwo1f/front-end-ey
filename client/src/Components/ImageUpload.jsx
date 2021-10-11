import React, { useContext } from "react";
import { useState } from "react";
import { Form, Stack, Button, InputGroup, FormControl } from "react-bootstrap";
import { BlobServiceClient } from "@azure/storage-blob";
import { UserContext } from "../UserContext";

function ImageUpload() {
  const { value, setValue } = useContext(UserContext);
  const userName = value;
  const [file, setFile] = useState();
  const currTime = Date.now();
  const fileName = userName + "_" + currTime;
  const [tagValue, setTagValue] = useState();
  const [desc, setDesc] = useState();
  var data = "";

  const onFileChange = (e) => setFile(e.target.files[0]);

  async function uploadFile() {
    let storageAccountName = "feblob";
    let sasToken =
      "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-19T21:57:16Z&st=2021-10-06T13:57:16Z&spr=https&sig=j5DNoN2tAzuTWHRZZrFfqto2ba%2FeYSgt%2Fn87SNIcCw4%3D";
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );

    const containerClient = blobService.getContainerClient("uploads");
    await containerClient.createIfNotExists({
      access: "container",
    });

    const blobClient = containerClient.getBlockBlobClient(fileName);
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    await blobClient.uploadBrowserData(file, options);
  }

  async function validate() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch(
      `http://getimgdata.azurewebsites.net/imgdata?img_url=https://feblob.blob.core.windows.net/uploads/${fileName}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        data = result;
      })
      .catch((error) => console.log("error", error));
    // const data = response.json();
    // console.log(data);
    setTagValue(data[2]);
    setDesc(data[1]);
  }

  return (
    <div>
      <br />
      <h6>Select an image to be uploaded</h6>
      <Stack direction="horizontal" gap={3}>
        <Form.Group controlId="formFile" className="">
          <Form.Control onChange={onFileChange} type="file" />
        </Form.Group>
        <div className="vr" />
        <Button
          variant="outline-dark"
          onClick={() => {
            uploadFile();
          }}
        >
          Upload
        </Button>
        <div className="vr" />
        <Button variant="outline-warning" onClick={validate}>
          Validate
        </Button>
      </Stack>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Tags</InputGroup.Text>
        <FormControl
          placeholder="Tags"
          aria-describedby="basic-addon1"
          value={tagValue}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Description</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" value={desc} />
      </InputGroup>
    </div>
  );
}

export default ImageUpload;
