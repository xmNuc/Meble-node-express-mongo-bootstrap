require('../models/db');
const Category = require('../models/Category');

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
    const categories = dbRecords.filter((e) => e.type === 'category');

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
      categories,
      mainArticule,
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
//     await Category.insertMany([
//       {
//         key: 'main_sci_description',
//         type: 'gallery_kitchen',
//         name_en: 'Super kitchen',
//         name_pl: 'Opis',
//         description_en:
//           'data here',
//         description_pl:
//           'data here',
//         image: '',
//       },
//     ]);
//   } catch (error) {
//     console.log('err', error);
//   }
// }

// insertCategoryData();
