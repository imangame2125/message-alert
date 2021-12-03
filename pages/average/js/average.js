const button = document.querySelector('#average');
const mathInput = document.querySelector('#mathInput')
const lawInput = document.querySelector('#lawInput')
const resultAverage = document.querySelector('#result-average');
const result = document.querySelector('#result')

function average(a, b) {
  let numbers = (+a + +b) / 2
  return numbers
}


button.addEventListener('click', () => {
  let math = mathInput.value
  let law = lawInput.value

  if (math === '' && law === '') {
    resultAverage.textContent = ''
  } else {
    resultAverage.textContent = average(math, law)
  }

  if (resultAverage.textContent > 10) {
    result.textContent = 'ghabool'
  } else {
    result.textContent = 'mardood'
  }
})

