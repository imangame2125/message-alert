const addCount = document.querySelector('#add');
const lowerCount = document.querySelector('#low');
const result = document.querySelector('#show-number');
let count = 0
addCount.addEventListener('click', () => {

  count++
  result.innerHTML = count
  if (count >= 1) {
    result.style.color = 'green'
  }
  else if (count === 0) {
    result.style.color = '#333333'
  }

})

lowerCount.addEventListener('click', () => {
  count--
  result.innerHTML = count
  if (count < 0) {
    result.style.color = 'red'
  }

  else if (count === 0) {
    result.style.color = '#333333'
  }
})
