const button = document.querySelector('#average');
const mathInput = document.querySelector('#mathInput')
const lawInput = document.querySelector('#lawInput')
const resultAverage = document.querySelector('#result-average');
const result = document.querySelector('#result')
const stars = document.querySelectorAll('.stars span')

mathInput.value = '10';
lawInput.value = '10';
// 10 -- 12 ==> 1
// 12 -- 14 ==> 2
// 14 -- 16 ==> 3
// 16 -- 18 ==> 4
// 18 -- 20 ==> 5

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

  if (resultAverage.textContent >= 10 && resultAverage.textContent <= 20) {
    result.textContent = 'ghabool'

  } else if(resultAverage.textContent < 10 && resultAverage.textContent >= 0) {
    result.textContent = 'mardood'
  }
  else {
    result.textContent = 'Invalid'
  }
  
}


button.addEventListener('click', () => {
  if (mathInput.value === '' && lawInput.value === '') {
    resultAverage.textContent = ''
  } else {
    myWork()
  }
  let average = +resultAverage.textContent;
  if (average >= 10 && average < 12) {
    showStars(1)
  } else if (average >= 12 && average < 14) {
    showStars(2)
  } else if (average >= 14 && average < 16) {
    showStars(3)
  } else if (average >= 16 && average < 18) {
    showStars(4)
  } else if (average >= 18 && average < 20) {
    showStars(5)
  } else {
    stars.forEach((item) => {
      item.classList.add('hide')
    })
  }
})

function showStars(numberOfStars) {
  let arr = Array.from(stars);
  arr.forEach((item) => {
    item.classList.add('hide')
  })
  let newArray = arr.slice(0, numberOfStars)
  newArray.forEach((item) => {
    item.classList.remove('hide')
  })
}



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

  for (let i = 0; i < names.length; i++) {
    let element = names[i]
    if (element === inputValue) {
      javab.textContent = 'yes'

      return
    } else if (i === names.length - 1) {

      javab.textContent = 'no'
    }
  }
})



