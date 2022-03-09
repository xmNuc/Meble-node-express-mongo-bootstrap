require('../models/db');
const Category = require('../models/Category');
const Photos = require('../models/Photos');

let language = 'pl';
// console.log(language);

exports.homepage = async (req, res) => {
  try {
    const recordsEn = await (
      await Category.find({})
    ).map(function (el) {
      return {
        key: el.key,
        type: el.type,
        name: el.name_en,
        image: el.image,
        description: el.description_en,
      };
    });

    const recordsPl = await (
      await Category.find({})
    ).map(function (el) {
      return {
        key: el.key,
        type: el.type,
        name: el.name_pl,
        image: el.image,
        description: el.description_pl,
      };
    });

    const dbRecords = language === 'en' ? recordsEn : recordsPl;

    const menuLogoName = dbRecords.filter((e) => e.type === 'menu-logo-name');
    const menuMainPage = dbRecords.filter((e) => e.type === 'menu-main-page');
    const menuMainAbout = dbRecords.filter((e) => e.type === 'menu-main-about');
    const menuMainContact = dbRecords.filter((e) => e.type === 'menu-main-contact');
    const menuMainSearch = dbRecords.filter((e) => e.type === 'menu-main-search');
    const mainArticule = dbRecords.filter((e) => e.type === 'main_articule');
    const mainArticuleLast = dbRecords.filter((e) => e.type === 'main-articule-last');
    const mainArticuleRandom = dbRecords.filter((e) => e.type === 'main-articule-random');
    const categories = dbRecords.filter((e) => e.type === 'category');

    res.render('index', {
      title: 'Meble na wymiar',
      menuLogoName,
      menuMainPage,
      menuMainAbout,
      menuMainContact,
      menuMainSearch,
      mainArticule,
      mainArticuleLast,
      mainArticuleRandom,
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || 'There is an Error' });
  }
};

exports.homepage_pl = async (req, res) => {
  language = 'pl';
  res.redirect('/');
};
exports.homepage_en = async (req, res) => {
  language = 'en';
  res.redirect('/');
};

exports.photoData = async (req, res) => {
  try {
    const photosEn = await (
      await Photos.find({})
    ).map(function (el) {
      return {
        id: el.id,
        type: el.type,
        key: el.key,
        name: el.name_en,
        subHtml: el.description_en,
        src: el.image,
        thumb: el.thumb,
      };
    });
    const photosPl = await (
      await Photos.find({})
    ).map(function (el) {
      return {
        id: el.id,
        type: el.type,
        key: el.key,
        name: el.name_pl,
        subHtml: el.description_pl,
        src: el.image,
        thumb: el.thumb,
      };
    });
    const dbPhotos = language === 'en' ? photosEn : photosPl;

    res.send(JSON.stringify(dbPhotos));
  } catch (error) {
    res.status(500).send({ message: error.message || 'There is an Error' });
  }
};

// insert data

// async function insertCategoryData() {
//   try {
//     await Photos.insertMany([
//       {
//         type: 'interior',
//         key: 'interior',
//         name_en: 'Interior design',
//         name_pl: 'Zabudowa wnętrz',
//         description_en: 'Wooden internal structures, walls and doors',
//         description_pl: 'Drewniane konstrukcje wewnętrzne, ściany i drzwi',
//         image: 'uploads/photos/interior/2.jpg',
//         thumb: 'uploads/photos/interior/2t.jpg',
//       },
//     ]);
//   } catch (error) {
//     console.log('err', error);
//   }
// }

// insertCategoryData();
