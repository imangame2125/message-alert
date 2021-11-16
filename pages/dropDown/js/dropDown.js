const button = document.querySelector('#btn-btn')
const dropDown = document.querySelector('.drop');

button.addEventListener('click', () => {
  
  dropDown.style.display = 'block'
  setTimeout(() => {
    dropDown.style.display = 'none'
  }, 1000);


dropDown.children[0].style.background = 'red'
 
})



