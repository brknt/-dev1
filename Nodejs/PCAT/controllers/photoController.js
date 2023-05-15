const Photo = require('../models/Photo');
const fs = require('fs');

const getAllPhoto = async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
};

const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

const createPhoto = async (req, res) => {
  let uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadImage.name;

  uploadImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadImage.name,
    });
    res.redirect('/');
  });
};

const updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  console.log(photo);
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();
  console.log('yeni', photo);

  res.redirect(`/photos/${req.params.id}`);
};

const deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public' + photo.image;
  fs.unlinkSync(deletedImage); // localdeki pathden dosyayı siler
  await Photo.findByIdAndRemove({ _id: req.params.id }); // mongodb veritabanından veriyi siler
  res.redirect('/');
};

module.exports = {
  getAllPhoto,
  getPhoto,
  createPhoto,
  updatePhoto,
  deletePhoto
};
