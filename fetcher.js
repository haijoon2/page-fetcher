const fs = require('fs');

const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];
const callback = (error, response, body) => {
  if (error) {
    console.log("Error: Something Went Wrong :'(");
    return;
  }

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error(error);
    }

    console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf8')} bytes to ${filePath}`);
  });
};

request(url, callback);
