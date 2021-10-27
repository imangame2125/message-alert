const addCount = document.querySelector('#addCount');
const lowerCount = document.querySelector('#lowerCount');
const result = document.querySelector('#result');
var count = 0
addCount.addEventListener('click', () => {

  count++
  result.innerHTML = count
  if (count >= 1) {
    result.style.color = 'green'
  }
  if (count === 0) {
    result.style.color = '#333333'
  }

})

lowerCount.addEventListener('click', () => {
  count--
  result.innerHTML = count
  if (count < 1) {
    result.style.color = 'red'
  }

  if (count === 0) {
    result.style.color = '#333333'
  }
})
