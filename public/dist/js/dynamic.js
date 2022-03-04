document.getElementById('dynamic').addEventListener('click', function () {
  lightGallery(document.getElementById('dynamic'), {
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
