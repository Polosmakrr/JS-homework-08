const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const lightImg = document.querySelector('.lightbox__image');

const pictureAlbum = createImgMatrix(galleryItems);

gallery.insertAdjacentHTML('beforeend', pictureAlbum);

function createImgMatrix(galleryItems) {
  return galleryItems
    .map(({ preview, description,original}) => {

      return `
      <li class="gallery__item">
      <a class="gallery__link" >
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
      </li>
      `;
    })
    .join('');
}

gallery.addEventListener('click', onGalleruContainerClick);

    function onGalleruContainerClick(event) {
      
      if (!event.target.classList.contains('gallery__image')){
        return;
      }
      lightBox.classList.add('is-open')
      lightImg.src = event.target.dataset.source;
      lightImg.alt = event.target.alt;
  }

const closeGallery = () => {
      lightBox.classList.remove('is-open');
     lightImg.src = '';
     lightImg.alt = '';
    
};
lightBox.addEventListener('click', e => {
  const target = e.target;
  if (target.classList.contains('lightbox__button') || target.classList.contains('lightbox__overlay')) {
    
    closeGallery();
  }
    window.removeEventListener('keydown', keyClickListener);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'|| e.key ==='Esc') {
    closeGallery()
  }
})

const dataSourse = [];
const img = document.querySelectorAll('.gallery__image');
const originalSrc = img.forEach(el => dataSourse.push(el.dataset.source));

document.addEventListener('keydown', e => {
  const currentIndex = dataSourse.indexOf(lightImg.src);
  
  if (e.key === 'ArrowLeft') {
    leftClick(currentIndex);
    } else if (e.key === 'ArrowRight') {
    rightClick(currentIndex);
  }
})


function rightClick(currentIndex) {
  let i = currentIndex;
  if (dataSourse.length - 1 > i) {
    i += 1;
    lightImg.src = dataSourse[i];
  } else { lightImg.src = dataSourse[0]; }
};
function leftClick(currentIndex) {
  let i = currentIndex;
  if (i > 0) {
    i -= 1;
    lightImg.src = dataSourse[i];
  } else {
    i = dataSourse.length;
    lightImg.src = dataSourse[i-1]
  };
}