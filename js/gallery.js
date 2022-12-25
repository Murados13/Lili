import * as photo1 from '/img/gallery/1.jpg';
import * as photo2 from '/img/gallery/2.jpg';
import * as photo3 from '/img/gallery/3.jpg';
import * as photo4 from '/img/gallery/4.jpg';
import * as photo5 from '/img/gallery/5.jpg';
import * as photo6 from '/img/gallery/6.jpg';
import * as photo7 from '/img/gallery/7.jpg';
import * as photo8 from '/img/gallery/8.jpg';
import * as photo9 from '/img/gallery/9.jpg';
import * as photo10 from '/img/gallery/10.jpg';
import * as photo11 from '/img/gallery/11.jpg';
import * as photo12 from '/img/gallery/12.jpg';
import * as photo13 from '/img/gallery/13.jpg';
import * as photo14 from '/img/gallery/14.jpg';
import * as photo15 from '/img/gallery/15.jpg';
import * as photo16 from '/img/gallery/16.jpg';
import * as photo17 from '/img/gallery/17.jpg';
import * as photo18 from '/img/gallery/18.jpg';

import * as likeIcon from '/img/icons/like.svg';

const gallery = document.querySelector('.gallery__photos');
const galleryCategorySelect = document.querySelector('.category__select');

const GalleryCatergories = {
  ALL: 'Все',
  PERSONAL: 'Личное',
  GROUP: 'Групповое',
  BRIDAL: 'Свадебное',
  STUDIO: 'Студийная',
};

const photos = [
  {url: photo1.default, likes: 3100, categories: [GalleryCatergories.PERSONAL, GalleryCatergories.STUDIO]},
  {url: photo2.default, likes: 3200, categories: [GalleryCatergories.PERSONAL, GalleryCatergories.STUDIO]},
  {url: photo3.default, likes: 3300, categories: [GalleryCatergories.PERSONAL, GalleryCatergories.STUDIO]},
  {url: photo4.default, likes: 3400, categories: [GalleryCatergories.PERSONAL, GalleryCatergories.STUDIO]},
  {url: photo5.default, likes: 3500, categories: [GalleryCatergories.PERSONAL]},
  {url: photo6.default, likes: 3600, categories: [GalleryCatergories.PERSONAL]},
  {url: photo7.default, likes: 3700, categories: [GalleryCatergories.PERSONAL]},
  {url: photo8.default, likes: 3800, categories: [GalleryCatergories.BRIDAL]},
  {url: photo9.default, likes: 3900, categories: [GalleryCatergories.BRIDAL]},
  {url: photo10.default, likes: 4000, categories: [GalleryCatergories.BRIDAL]},
  {url: photo11.default, likes: 4100, categories: [GalleryCatergories.BRIDAL]},
  {url: photo12.default, likes: 4200, categories: [GalleryCatergories.BRIDAL]},
  {url: photo13.default, likes: 4300, categories: [GalleryCatergories.BRIDAL]},
  {url: photo14.default, likes: 4400, categories: [GalleryCatergories.GROUP]},
  {url: photo15.default, likes: 4500, categories: [GalleryCatergories.GROUP, GalleryCatergories.STUDIO]},
  {url: photo16.default, likes: 4600, categories: [GalleryCatergories.GROUP]},
  {url: photo17.default, likes: 4700, categories: [GalleryCatergories.GROUP]},
  {url: photo18.default, likes: 4800, categories: [GalleryCatergories.GROUP, GalleryCatergories.STUDIO]},
];

const renderPhoto = ({url, likes}) => {
  const regExp = new RegExp(`.{1,${3}}`, 'g');

  const likesText =
    likes.toString().split('').reverse().join('').match(regExp)?.join(',').split('').reverse().join('') ?? '';

  return `
    <div class="gallery__photo">
      <div class="gallery__photo-content">
        <img src="${url}" alt="photo" class="gallery__photo-img" />

        <div class="gallery__photo-header">
          <svg class="gallery__photo-like" width="300" height="267" viewBox="0 0 300 267" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 266.904C145.729 266.904 141.611 265.356 138.403 262.546C126.283 251.949 114.599 241.99 104.29 233.205L104.237 233.16C74.0135 207.404 47.9141 185.161 29.7546 163.25C9.45511 138.755 0 115.53 0 90.1588C0 65.5083 8.45261 42.7666 23.7991 26.12C39.3288 9.27658 60.6377 0 83.8074 0C101.125 0 116.984 5.47485 130.943 16.2712C137.988 21.7209 144.374 28.3905 150 36.1702C155.628 28.3905 162.012 21.7209 169.059 16.2712C183.018 5.47485 198.878 0 216.195 0C239.362 0 260.674 9.27658 276.203 26.12C291.55 42.7666 300 65.5083 300 90.1588C300 115.53 290.547 138.755 270.248 163.248C252.088 185.161 225.991 207.401 195.772 233.155C185.445 241.953 173.742 251.928 161.595 262.55C158.389 265.356 154.269 266.904 150 266.904ZM83.8074 17.5735C65.6044 17.5735 48.8823 24.8383 36.7172 38.031C24.3713 51.4229 17.5713 69.9348 17.5713 90.1588C17.5713 111.497 25.502 130.582 43.2838 152.037C60.4706 172.776 86.0344 194.561 115.633 219.786L115.688 219.832C126.036 228.651 137.766 238.648 149.975 249.323C162.257 238.628 174.005 228.614 184.373 219.781C213.97 194.556 239.532 172.776 256.718 152.037C274.498 130.582 282.429 111.497 282.429 90.1588C282.429 69.9348 275.629 51.4229 263.283 38.031C251.12 24.8383 234.396 17.5735 216.195 17.5735C202.86 17.5735 190.617 21.8124 179.807 30.1712C170.174 37.6236 163.463 47.0444 159.528 53.6362C157.505 57.0259 153.944 59.0492 150 59.0492C146.056 59.0492 142.495 57.0259 140.472 53.6362C136.539 47.0444 129.829 37.6236 120.193 30.1712C109.383 21.8124 97.1397 17.5735 83.8074 17.5735Z" fill="currentColor"/>
          </svg>

          <p class="gallery__photo-likes">${likesText}</p>
        </div>
        <div class="gallery__photo-footer">
          <p class="gallery__photo-author">@liliphotographyinst</p>
        </div>
      </div>
      <img src="${url}" alt="photo" class="gallery__photo-img_hover" />
      <img src="${url}" alt="photo" class="gallery__photo-img_blur" />
    </div>
  `;
};

const renderPhotos = (currentCategory) => {
  gallery.innerHTML = '';

  photos
    .filter(({categories}) => currentCategory === GalleryCatergories.ALL || categories.includes(currentCategory))
    .forEach((photo) => {
      gallery.innerHTML += renderPhoto({url: photo.url, likes: photo.likes});
    });
};

document.addEventListener('DOMContentLoaded', () => {
  renderPhotos(GalleryCatergories.ALL);
});

galleryCategorySelect.addEventListener('change', (event) => {
  renderPhotos(event.target.value);
});
