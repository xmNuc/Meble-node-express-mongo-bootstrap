require('../models/db');
const Category = require('../models/Category');

let language = 'pl';
console.log(language);

exports.homepage = async (req, res) => {
  try {
    const maxNumbers = 5;
    const categories_en = await (
      await Category.find({})
    )
      .map((el) => {
        return { name: el.name_en, image: el.image };
      })
      .slice(0, maxNumbers);
    const categories_pl = await (
      await Category.find({})
    )
      .map((el) => {
        return {
          name: el.name_pl,
          image: el.image,
        };
      })
      .slice(0, maxNumbers);

    let categories = language === 'en' ? categories_en : categories_pl;

    // console.log(
    //   await (
    //     await Category.find({})
    //   ).map(function (el) {
    //     return { name_en: el.name_en, image: el.image };
    //   })
    // );

    res.render('index', { title: 'Meble na wymiar', categories });
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
exports.categories = async (req, res) => {
  const maxNumbers = 20;
  try {
    const categories_en = await (
      await Category.find({})
    )
      .map((el) => {
        return { name: el.name_en, image: el.image };
      })
      .slice(0, maxNumbers);
    const categories_pl = await (
      await Category.find({})
    )
      .map((el) => {
        return {
          name: el.name_pl,
          image: el.image,
        };
      })
      .slice(0, maxNumbers);

    let categories = language === 'en' ? categories_en : categories_pl;

    res.render('categories', { title: 'Wszystkie kategorie', categories });
  } catch (error) {
    res.status(500).send({ message: error.message || 'There is an Error' });
  }
};

// insert data
// async function insertCategoryData() {
//   try {
//     await Category.insertMany();
//   } catch (error) {
//     console.log('err', error);
//   }
// }

// insertCategoryData();
