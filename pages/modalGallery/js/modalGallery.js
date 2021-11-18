const images = document.querySelectorAll('.images img')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modalImg')
const modalText = document.querySelector('.modalText')
const close = document.querySelector('.close')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')


images.forEach((image) => {
  image.addEventListener('click', () => {

    modalImg.src = image.src
    modalImg.dataset.index = image.dataset.index
    modalText.textContent = image.alt
    modal.classList.add('appear')

    close.addEventListener('click', () => {
      modal.classList.remove('appear')

    })
  });


})
// be hame axa data-type index dadim baddesh oomadim be modalImage ham data-type ro emal kardim 

nextBtn.addEventListener('click', () => {

  let index = +modalImg.dataset.index;
  console.log(index);
  index++;
  if (index === 4) {
    index = 1
  }

  modalImg.src = `/picture/benz-${index}.jpg`;
  modalImg.dataset.index = index;
})



prevBtn.addEventListener('click', () => {
  let index = +modalImg.dataset.index;
  index--
  if (index === 0) {
    index = 3
  }
  modalImg.src = `/picture/benz-${index}.jpg`;
  modalImg.dataset.index = index;
})