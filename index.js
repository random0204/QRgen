/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
inquirer
  .prompt([{
    message:"Type in your URL:",
    name:"URL",
  },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const URL=answers.URL;
    var qr_svg = qr.image(URL);
qr_svg.pipe(fs.createWriteStream("qr-img.png"));
fs.writeFile('esd.txt', URL, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });