// import {kitchen, stairs, all} from './data.js'

document.getElementById('all').addEventListener('click', function () {
  lightGallery(document.getElementById('all'), {
    dynamic: true,
    dynamicEl: all()
  });
});

document.getElementById('kitchen').addEventListener('click', function () {
  lightGallery(document.getElementById('kitchen'), {
    dynamic: true,
    dynamicEl: kitchen()
  });
});
document.getElementById('stairs').addEventListener('click', function () {
  lightGallery(document.getElementById('stairs'), {
    dynamic: true,
    dynamicEl: [
      {
        src: '/uploads/photos/stairs1.jpg',
        thumb: '',
        subHtml:
          '',
      },
    ],
  });
});
document.getElementById('office').addEventListener('click', function () {
  lightGallery(document.getElementById('office'), {
    dynamic: true,
    dynamicEl: [
      {
        src: '/img/random2.jpg',
        thumb: '/img/random2.jpg',
        subHtml:
          '<h4>Name place here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random3.jpg',
        thumb: '/img/random3.jpg',
        subHtml:
          '<h4>Name here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random4.jpg',
        thumb: '/img/random4.jpg',
        subHtml:
          '<h4>Name placer</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
    ],
  });
});
document.getElementById('interior').addEventListener('click', function () {
  lightGallery(document.getElementById('interior'), {
    dynamic: true,
    dynamicEl: [
      {
        src: '/img/random2.jpg',
        thumb: '/img/random2.jpg',
        subHtml:
          '<h4>Name place here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random3.jpg',
        thumb: '/img/random3.jpg',
        subHtml:
          '<h4>Name here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random4.jpg',
        thumb: '/img/random4.jpg',
        subHtml:
          '<h4>Name placer</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
    ],
  });
});
document.getElementById('wardrobes').addEventListener('click', function () {
  lightGallery(document.getElementById('wardrobes'), {
    dynamic: true,
    dynamicEl: [
      {
        src: '/img/random2.jpg',
        thumb: '/img/random2.jpg',
        subHtml:
          '<h4>Name place here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random3.jpg',
        thumb: '/img/random3.jpg',
        subHtml:
          '<h4>Name here</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
      {
        src: '/img/random4.jpg',
        thumb: '/img/random4.jpg',
        subHtml:
          '<h4>Name placer</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus dolores explicabo, culpa, molestiae minima quam eius, ad mollitia tempore harum dolore sint minus tempora voluptate vel ipsam commodi laboriosam!</p>',
      },
    ],
  });
});


const fethedData = fetch('http://localhost:3000/data').then(response => {return response.json()}).then(data=> console.log(data)).catch(err => console.log(err))