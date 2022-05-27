import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
// const galleryList = galleryListCreate(galleryItems);


// galleryContainer.addEventListener('click', onImgClick);

function galleryListCreate(items) {
    return items.map(item =>
`<a class="gallery__item" href="${item.original}">
  <img
  class="gallery__image" src="${item.preview}"
  data-source="${item.original}" 
  alt="${item.description}"
  title="${item.description}" />
</a>`).join("");
}
galleryContainer.innerHTML = galleryListCreate(galleryItems);

let gallery = new SimpleLightbox('.gallery a', { overlayOpacity: 0.8 });

gallery.on('show.simplelightbox', function (e) {
    gallery.options.fadeSpeed = 250
    gallery.options.captionData = e.target.children[0].title
})

console.log(galleryItems);