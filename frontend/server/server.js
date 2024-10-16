const express = require('express');
const cors = require('cors');
const fs = require('fs');

const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    // // load all images from the ../public/images directory
    // const images = fs.readdirSync('../public/images');  
    // const imagesPath = images.map(image => `${process.cwd()}/public/images/${image}`);
    // //split the imagesPath to take only the file path excluding the C:\Users\...\Documents\GitHub\Book-Store part

    // const imagesPathSplit = imagesPath.map(path => path.split('\\').slice(1).join(''));
    // const imagesPathSplit2 = imagesPathSplit.map(path => path.split('frontend').slice(1).join(''));   
    // res.send(imagesPathSplit2);

    //import the images from the ../public/images directory
    const images = fs.readdirSync(path.join(__dirname, '../public/images')); 
    const imagesPath = images.map(image => path.join(__dirname, '../public/images', image));
    res.send(imagesPath);
      
});

app.listen(port, () => {
    console.log(`Server  is running on port ${port}`);
});



