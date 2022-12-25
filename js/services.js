import * as birthdayImg from '/img/services/birthday.jpg';
import * as bridalImg from '/img/services/bridal.jpg';
import * as childrenImg from '/img/services/children.jpg';
import * as loveImg from '/img/services/love.jpg';

const variantsContainer = document.querySelector('.variants');

const variants = [
  {img: bridalImg.default, title: 'Свадебная фотосессия', prices: [10000, 20000, 35000]},
  {img: childrenImg.default, title: 'Детская фотосессия', prices: [11000, 21000, 36000]},
  {img: loveImg.default, title: 'Фотосессия влюбленных', prices: [12000, 22000, 37000]},
  {img: birthdayImg.default, title: 'День рождения', prices: [13000, 23000, 38000]},
];

const renderVariant = (variant) => {
  return `
    <div class="variants__item">
      <p class="variants__title">${variant.title}</p>
      <img src="${variant.img}" alt="${variant.title}" class="variants__img" />
    </div>
  `;
};

const renderVariants = () => {
  variantsContainer.innerHTML = '';

  variants.forEach((varaint) => {
    variantsContainer.innerHTML += renderVariant(varaint);
  });
};

document.addEventListener('DOMContentLoaded', renderVariants);
