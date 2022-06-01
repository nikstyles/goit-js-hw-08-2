import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery'); // Обращение к родителю в HTML
const imageMarkup = createImage(galleryItems); //Переменная для вызова функции

galleryContainer.insertAdjacentHTML('beforeend', imageMarkup); //Добавление в родителя готовой разметки

function createImage(image) {
  //Рендер разметки
  return image
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
