// Create json file ./src/data/galleryItems.ts from images ./src/gallery by run node ./src/createjson.js
// Create an empty array to store the photos
import fs from "fs";

const images = [];
// Get all the image files in the directory
const files = fs.readdirSync("./src/gallery");
// Loop through the files and add them to the array
let m = 0;
for (const file of files) {
  // console.log(file)
  images.push({
    id: `img${m}`,
    src: `https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/${file}`,
    alt: `${file}`,
  });
  m++;
}
// console.log(images);
// Convert the array to JSON
const json = `import { GalleryItem } from "../interfaces"; export const sampleGalleryItems: GalleryItem[] = ${JSON.stringify(images)}`;
fs.writeFile('./src/data/galleryItems.ts', json, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
