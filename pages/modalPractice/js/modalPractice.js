const modalContainer = document.querySelector('.modal-container');
const modalImage = document.querySelector('.modalImg');
const images = document.querySelectorAll('.images img');

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.addEventListener('click', () => {
    modalContainer.style.display = 'block'
    modalImage.src = image.src;
    modalImage.dataset.index = image.dataset.index
  });
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  console.log('close')
  modalContainer.style.display = 'none'
  modalImage.src = null;
});

const nextBtn = document.querySelector('.next')
nextBtn.addEventListener('click', () => {
  let index = +modalImage.dataset.index
  index++
  if (index === 5) {
    index = 1
  }
  modalImage.src = `/picture/animal-${index}.jpg`
  modalImage.dataset.index = index

})

const prevBtn = document.querySelector('.prev')
prevBtn.addEventListener('click', () => {
  let index = +modalImage.dataset.index
  index--
  if (index === 0) {
    index = 4
  }
  modalImage.src = `/picture/animal-${index}.jpg`
  modalImage.dataset.index = index
})