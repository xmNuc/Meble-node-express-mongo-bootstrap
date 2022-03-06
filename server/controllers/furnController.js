require('../models/db');
const Category = require('../models/Category');
const Photos = require('../models/Photos');

let language = 'pl';
console.log(language);

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

    const photosEn = await (
      await Photos.find({})
    ).map(function (el) {
      return {
        id: el.id,
        type: el.type,
        key: el.key,
        name: el.name_en,
        description: el.description_en,
        image: el.image,
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
        description: el.description_pl,
        image: el.image,
        thumb: el.thumb,
      };
    });
    const dbPhotos = language === 'en' ? photosEn : photosPl;

    // console.log(dbPhotos);

    // console.log(
    //   await (
    //     await Category.find({})
    //   )
    //     .map(function (el) {
    //       return {
    //         key: el.key,
    //         type: el.type,
    //         name_en: el.name_en,
    //         name_pl: el.name_pl,
    //         image: el.image,
    //         description_en: el.description_en,
    //         description_pl: el.description_pl,
    //       };
    //     })
    //     .filter((e) => e.type === 'main_articule')
    // );

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
      dbPhotos,
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

// // insert data

// async function insertCategoryData() {
//   try {
//     await Photos.insertMany([
//       {
//         type: 'stairs',
//         key: 'stairs-1',
//         name_en: 'Stairs',
//         name_pl: 'Schody',
//         description_en: 'Wooden stairs with handrails in a single-family house',
//         description_pl: 'Schody drewniane wraz z poręczami w domku jednorodzinnym ',
//         image: 'stairs3.jpg',
//         thumb: 'stairs3.jpg',
//       },
//     ]);
//   } catch (error) {
//     console.log('err', error);
//   }
// }

// insertCategoryData();
