const process = require('process');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageSize = process.argv[2];
const width = Number(imageSize.split('x')[0]);
const height = Number(imageSize.split('x')[1]);
const dirInputPath = process.argv[3];
const dirOutputPath = process.argv[4];

const readInputDir = fs.readdirSync(dirInputPath);

readInputDir.forEach((image) => {

    let imageFile = fs.readFileSync( dirInputPath + path.sep + image)

    let target = dirOutputPath + path.sep + image

    sharp(imageFile)
  .resize(width, height)
  .toFile(target, (err, info) => { 
      console.log(err, info)
  });
})