// 3. part module
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');

// core module
//const fs = require('fs');

//own 
const Photo = require('./models/Photo');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');


const app = express();


// DB connect:
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//TEMPLATE ENGINE
app.set('view engine', 'ejs');




// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // urldeki datayı okumamızı sağlıyo
app.use(express.json()); // urldeki datayı json formatta okuyo
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:["POST","GET"]
}));



// ROUTES
app.get('/',photoController.getAllPhoto);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id',photoController.deletePhoto);



app.get('/about',pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);






const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı.`);
});
