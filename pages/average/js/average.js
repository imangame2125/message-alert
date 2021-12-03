const button = document.querySelector('#average');
const mathInput = document.querySelector('#mathInput')
const lawInput = document.querySelector('#lawInput')
const resultAverage = document.querySelector('#result-average');
const result = document.querySelector('#result')
const stars = document.querySelectorAll('.stars span')
console.log(stars);

function average(a, b) {
  let numbers = (+a + +b) / 2
  return numbers
}

function myWork() {
  let math = mathInput.value
  let law = lawInput.value

  if (math === '' && law === '') {
    resultAverage.textContent = ''
  } else {
    resultAverage.textContent = average(math, law)
  }

  if (resultAverage.textContent >= 10) {
    result.textContent = 'ghabool'
  } else {
    result.textContent = 'mardood'
  }
}

button.addEventListener('click', () => {
  myWork()
})

const names = ['ali', 'naser', 'sara', 'fatemeh', 'sahar'];
let input = document.createElement('input');
const btn = document.createElement('button');
const javab = document.createElement('p')

document.body.appendChild(input);
document.body.appendChild(javab);
document.body.appendChild(btn)

input.type = 'text';
btn.textContent = 'click'
btn.addEventListener('click', () => {
  let inputValue = input.value
  for (let i = 0; i < names.length; i++) {
    let element = names[i]
    if (element === inputValue) {
      javab.textContent = 'yes'
      return
    } else if (i === names.length - 1) {
      console.log('rrr')
      javab.textContent = 'no'
    }
  }
})
