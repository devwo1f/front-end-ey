  const blobs = azure.createBlobService();
  var tempUrl = blobs.getBlobUrl("[CONTAINER_NAME]", "[BLOB_NAME]", {
    AccessPolicy: {
      Start: azure.date.minutesFromNow(-5),
      Expiry: azure.date.minutesFromNow(45),
      Permissions: azure.Constants.BlobConstants.SharedAccessPermissions.READ,
    },
  });
  const account = "feblob";
  const sas =
    "sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-19T21:57:16Z&st=2021-10-06T13:57:16Z&spr=https&sig=j5DNoN2tAzuTWHRZZrFfqto2ba%2FeYSgt%2Fn87SNIcCw4%3D";
  const containerName = "files";
  const blobName = "abhay_1633553219521";
  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net/?${sas}`
  );
  async function download() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
  Get blob content from position 0 to the end
  In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await blobToString(
    await downloadBlockBlobResponse.blobBody
  );
  console.log("Downloaded blob content", downloadBlockBlobResponse);
  [Browsers only] A helper method used to convert a browser Blob into string.
  async function blobToString(blob) {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onloadend = (ev) => {
        resolve(ev.target.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsText(blob);
    });
  }