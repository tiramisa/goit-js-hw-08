import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryList = galleryItems
  .map(
    item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`
  )
  .join('');

galleryEl.innerHTML = galleryList;
galleryEl.style.cssText = 'list-style: none';

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  close: false,
});
