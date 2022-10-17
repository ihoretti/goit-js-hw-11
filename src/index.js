import {
  emptySearchMessage,
  noImagesFoundMessage,
  imagesFoundMessage,
  endOfSearchMessage,
} from './js/notify';
import NewAPI from './js/API'; // импортирую класс
import { createMarkup } from './js/createMarkup'; // шаблон разметки
import LoadMoreBtn from './js/loadMoreBtn'; // импорт кнопки loadmorebtn
import { getRefs } from './js/getRefs'; // импорт рефов
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
