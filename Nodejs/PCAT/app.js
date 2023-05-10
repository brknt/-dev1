const express = require('express');
const mongoose = require('mongoose');

const Photo = require('./models/Photo');


const app = express();


// DB connect:
mongoose.connect('mongodb://localhost/pcat-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//TEMPLATE ENGINE
app.set('view engine','ejs');




// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended :true})); // urldeki datayı okumamızı sağlıyo
app.use(express.json()); // urldeki datayı json formatta okuyo




// ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index',{
    photos
  });
});

app.get('/photos/:id', async (req, res) => {
  
  const photo = await Photo.findById(req.params.id);
  console.log(photo);
  
  res.render('photo', {
    photo
  });
  
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
  
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');  
});



const port = 3000; 
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı.`);
});
