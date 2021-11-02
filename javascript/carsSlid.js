const right = document.querySelector('#right');
const left = document.querySelector('#left');
const imageShow = document.querySelector('.img')
const images = ['https://js-beginners.github.io/background-image-slider-project/img/contBcg-0.jpeg', 'https://js-beginners.github.io/background-image-slider-project/img/contBcg-1.jpeg', 'https://js-beginners.github.io/background-image-slider-project/img/contBcg-2.jpeg', 'https://js-beginners.github.io/background-image-slider-project/img/contBcg-3.jpeg', 'https://js-beginners.github.io/background-image-slider-project/img/contBcg-4.jpeg'];
let index = 0;
imageShow.src = images[index];
right.addEventListener('click', () => {
  index++
  if (index > images.length - 1) {
    index = 0
  }
  imageShow.src = images[index]

})


left.addEventListener('click', () => {
  index--
  if (index < 0) {
    index = images.length - 1
  }
  imageShow.src = images[index]

})
