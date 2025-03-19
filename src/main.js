import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  showLoader,
  hideLoader,
  showError,
  clearGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
});

document.querySelector('.form').addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    showError('Enter search query');
    return;
  }

  showLoader();
  clearGallery();

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(images);
    }
  } catch (error) {
    showError('Something went wrong. Please try again!');
  } finally {
    hideLoader();
  }
});
