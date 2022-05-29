import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const galleryList = galleryListCreate(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryList);

galleryContainer.addEventListener('click', onImgClick);

function galleryListCreate(items) {
    return items.map(item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`).join("");
}

function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const originImg = evt.target.dataset.source;
    // console.log(originImg);

    showBigImage(originImg); 
}

function showBigImage(link) {
    const instance = basicLightbox.create(`<img src='${link}'>`,
        {
            onShow: instance => {
                window.addEventListener('keydown', onEsc);
            },
            onClose: instance => {
                window.removeEventListener('keydown', onEsc);
            },
        }
    );
    
    instance.show();

    function onEsc(e) {
        if (e.code === 'Escape') {
            instance.close();
             window.removeEventListener('keydown', onEsc);}
    }
}