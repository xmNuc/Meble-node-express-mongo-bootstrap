
const fetchData = async () => {
  try {
      const response = await fetch('js/data.js');
       const data = await response.json();

      //  console.log(data);

       document.getElementById('all').addEventListener('click', function () {
        lightGallery(document.getElementById('all'), {
          dynamic: true,
          dynamicEl: data
        });
      })
       document.getElementById('kitchen').addEventListener('click', function () {
        lightGallery(document.getElementById('kitchen'), {
        
          dynamic: true,
          dynamicEl: data.filter((e) => e.type === 'kitchen')
        });
      })
       document.getElementById('interior').addEventListener('click', function () {
        lightGallery(document.getElementById('interior'), {
          dynamic: true,
          dynamicEl: data.filter((e) => e.type === 'interior')
        });
      })
       document.getElementById('office').addEventListener('click', function () {
        lightGallery(document.getElementById('office'), {
          dynamic: true,
          dynamicEl: data.filter((e) => e.type === 'office')
        });
      })
       document.getElementById('wardrobes').addEventListener('click', function () {
        lightGallery(document.getElementById('wardrobes'), {
          dynamic: true,
          dynamicEl: data.filter((e) => e.type === 'wardrobes')
        });
      })
       document.getElementById('stairs').addEventListener('click', function () {
        lightGallery(document.getElementById('stairs'), {
          dynamic: true,
          dynamicEl: data.filter((e) => e.type === 'stairs')
        });
      })

       return data
     } catch(error) {
        console.log('Error has ocurr while fetch data')
       } 
  }
 
fetchData()
