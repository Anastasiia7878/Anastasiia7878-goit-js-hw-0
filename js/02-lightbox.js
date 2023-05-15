import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
    .map((item) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
    `)
    .join("");

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
    animationSpeed: 250,
});

console.log(galleryItems);
