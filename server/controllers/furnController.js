require('../models/db');
const Category = require('../models/Category');

let language = 'pl';
console.log(language);

exports.homepage = async (req, res) => {
  try {
    const categories_en = await (
      await Category.find({})
    )
      .map((el) => {
        return {
          key: el.key,
          type: el.type,
          name: el.name_en,
          image: el.image,
        };
      })
      .filter((e) => e.type === 'category');
    const categories_pl = await (
      await Category.find({})
    )
      .map((el) => {
        return {
          key: el.key,
          type: el.type,
          name: el.name_pl,
          image: el.image,
        };
      })
      .filter((e) => e.type === 'category');

    let categories = language === 'en' ? categories_en : categories_pl;

    const mainArticuleEn = await (
      await Category.find({})
    )
      .map(function (el) {
        return {
          key: el.key,
          type: el.type,
          name: el.name_en,
          image: el.image,
          description: el.description_en,
        };
      })
      .filter((e) => e.type === 'main_articule');

    const mainArticulePl = await (
      await Category.find({})
    )
      .map(function (el) {
        return {
          key: el.key,
          type: el.type,
          name: el.name_pl,
          image: el.image,
          description: el.description_pl,
        };
      })
      .filter((e) => e.type === 'main_articule');

    const mainArticule = language === 'en' ? mainArticuleEn : mainArticulePl;

    console.log(mainArticule);

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
//           'We create custom-made furniture according to specific needs for individual clients, companies and institutions.Our goal is comfort, functionality and practicality.',
//         description_pl:
//           'Tworzymy meble na zamówienie według określonych potrzeb dla klientów indywidualnych, firm i instytucji. Liczy się dla nas wygoda, funkcjonalność, praktyczność.',
//         image: '',
//       },
//     ]);
//   } catch (error) {
//     console.log('err', error);
//   }
// }

// insertCategoryData();
