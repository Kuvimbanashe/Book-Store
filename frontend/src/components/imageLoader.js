import path from 'path';
import fs from 'fs';
import context from 'context';
const imagePath = path.join(process.cwd(), 'public/images');
const images = fs.readdirSync(imagePath);

const imageContext = context('../public/images', false, /\.(png|jpe?g|svg)$/);

const imagesArray = images.map((image) => {
  return imageContext(`./${image}`);
});

export default imagesArray;
