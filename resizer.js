const process = require('process');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { includes } = require('lodash');
require('dotenv').config()

const imageSize = process.env.IMAGE_SIZE;
const width = Number(imageSize.split('x')[0]);
const height = Number(imageSize.split('x')[1]);
const dirInputPath = process.env.DIR_INPUT_PATH;
const dirOutputPath = process.env.DIR_OUTPUT_PATH;

const readInputDir = fs.readdirSync(dirInputPath);
const readOutputDir = fs.readdirSync(dirOutputPath);

readOutputDir.forEach((file) => {

  fs.unlink(path.join(dirOutputPath, file), (err) => {

    if(err) throw err;
  })
})

readInputDir.forEach((image) => {

  let imageFile = fs.readFileSync( dirInputPath + path.sep + image)

  const imageExt = ['.jpg', '.jpeg', '.png', 'svg', 'gif']

  if(imageExt.includes(path.extname(image))) {

      let target = dirOutputPath + path.sep + image

      sharp(imageFile)
    .resize(width, height)
    .toFile(target, (err, info) => { 
        console.log(err, info)
    });
}
})