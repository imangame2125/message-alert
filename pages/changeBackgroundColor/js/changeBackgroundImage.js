const images = ['picture/benz-1.jpg', 'picture/benz-2.jpg', 'picture/benz-3.jpg', 'picture/benz-4.jpg', 'picture//benz-5.jpg'];
const nextButton = document.querySelector('#next');
const prevtButton = document.querySelector('#prev');
const image = document.querySelector('#img');
const title = document.querySelector('#title');
let index = 0;
let photo = images[index];
image.src = photo

nextButton.addEventListener('click', () => {
  // if (index < images.length - 1) {
  //   index++
  // } else {
  //   index = 0
  // }
  // let imagemain = images[index]
  // image.src = imagemain
  index++
  if (index > images.length - 1) {
    index = 0
  }
  let photo = images[index];
  image.src = photo

})


prevtButton.addEventListener('click', () => {
  index--
  if (index < 0) {//vaghti resid be avale araye bargarde be tahesh//index shod -1 bargarde be khooneye 4//
    index = images.length - 1
  }
  let imagemain = images[index]
  image.src = imagemain

})