// const container = document.querySelector('.container')
const names = document.querySelectorAll('.container .text')
const checkBox = document.querySelector('#checkBox')
const input = document.querySelector('#input')
input.addEventListener('input', () => {
  let inputText = input.value.toLowerCase()
  names.forEach((name) => {
    if (name.textContent.toLowerCase().includes(inputText)) { // agar neveshte bakhshi az esmha bood
      if (checkBox.checked) { // agar checkbox balaye 18 tick khorde bood
        if (+name.dataset.age >= 18) { // agar sene balaye 18 bood
          name.classList.remove('hide')

        }
        else { // agar sen kamtar az 18 bood
          name.classList.add('hide')
        }
      } else { // agar checkbox tick nakhorde bood
        name.classList.remove('hide')
      }


    } else { // agar neveshte bakhshi az esm nabood
      name.classList.add('hide')

    }


  })

})


checkBox.addEventListener('change', () => {
  const checked = checkBox.checked;
  let inputText = input.value.toLowerCase();
  names.forEach((name) => {
    let age = +name.dataset.age;
    if (checked) { // tick khorde
      if (age >= 18) {
        if (name.textContent.toLowerCase().includes(inputText)) {
          name.classList.remove('hide')
        }
        else {
          name.classList.add('hide')
        }
      }
      else {
        name.classList.add('hide')
      }
    }
    else {
      if (name.textContent.toLowerCase().includes(inputText)) {
        name.classList.remove('hide')
      }
      else {
        name.classList.add('hide')
      }
    }

    // if (+name.dataset.age < 18 && checkBox.checked) {
    //   name.classList.add('hide')
    // } else {
    //   name.classList.remove('hide')
    // }


  })
})

const images = document.querySelectorAll('.imageContainer img');
const modalContainer = document.querySelector('.modalContainer')
modalImage = document.querySelector('#imageShow')
images.forEach((image) => {
  image.addEventListener('click', () => {
    modalImage.src = image.src
    modalContainer.classList.add('show')
    modalContainer.classList.add('animate')
  })
})




const boys = ['Ali', 'Hassan', 'Ehssan', 'Naser', 'Majid', 'Pedram', 'Amir', 'Behnam', 'Arash', 'Iman'];
const girls = ['Sara', 'Sahar', 'Nadia', 'Mobina', 'Nafas', 'Negar', 'Arezoo', 'Zhila', 'Atoosa', 'Bita'];
const people = [
  {
    name: 'Ali',
    age: 35,
    gender: 'male'
  },
  {
    name: 'Hassan',
    age: 25,
    gender: 'male'
  },
  {
    name: 'Ehssan',
    age: 35,
    gender: 'male'
  },
  {
    name: 'Naser',
    age: 20,
    gender: 'male'
  },
  {
    name: 'Naser',
    age: 25,
    gender: 'male'
  },
  {
    name: 'Majid',
    age: 18,
    gender: 'male'
  },
  {
    name: 'Pedram',
    age: 27,
    gender: 'male'
  },
  {
    name: 'Amir',
    age: 19,
    gender: 'male'
  },
  {
    name: 'Behnam',
    age: 45,
    gender: 'male'
  },
  {
    name: 'Arash',
    age: 30,
    gender: 'male'
  },
  {
    name: 'Iman',
    age: 28,
    gender: 'male'
  },
  {
    name: 'Sara',
    age: 22,
    gender: 'female'
  },
  {
    name: 'Sahar',
    age: 16,
    gender: 'female'
  },
  {
    name: 'Nadia',
    age: 14,
    gender: 'female'
  },
  {
    name: 'Mobina',
    age: 19,
    gender: 'female'
  },
  {
    name: 'Nafas',
    age: 70,
    gender: 'female'
  },
  {
    name: 'Negar',
    age: 35,
    gender: 'female'
  },
  {
    name: 'Arezoo',
    age: 35,
    gender: 'female'
  },
  {
    name: 'Bita',
    age: 47,
    gender: 'female'
  },
  {
    name: 'Atoosa',
    age: 11,
    gender: 'female'
  },
  {
    name: 'Zhila',
    age: 33,
    gender: 'female'
  },
]






// const newBoyArr = boys.map(element => element.toLowerCase());
// const newBoyAge = people.map(element => element.age);


// const newGirlArr = girls.map(element => element.toLowerCase());

// let newBoyArr = []
// boys.forEach((element) => {
//   newBoyArr.push(element.toLowerCase())
// })

// let newGirlArr = []
// girls.forEach((girlElement) => {
//   newGirlArr.push(girlElement.toLowerCase())
// })

const textArea = document.querySelector('#name')
const Age = document.querySelector('#age')
const inputText = document.querySelector('#inputText');
const button = document.querySelector('#btn-btn');

// button.addEventListener('click', (e) => {
//   let inputValue = inputText.value.toLowerCase()
//   e.preventDefault();

//   if (newBoyArr.includes(inputValue)) {
//     textArea.textContent = 'boy'
//   } else if (newGirlArr.includes(inputValue)) {
//     textArea.textContent = 'girl'
//   } else {
//     textArea.textContent = 'invalid'
//   }


// })
// let boysArr = []
// let girlsArr = []
// people.forEach((element) => {
//   if (element.gender === 'male') {
//     let boyNames = element.name.toLowerCase()
//     boysArr.push(boyNames)
//   } else if (element.gender === 'female') {
//     let girlNames = element.name.toLowerCase()
//     girlsArr.push(girlNames)
//   }

// })





button.addEventListener('click', (e) => {
  let inputValue = inputText.value.toLowerCase()
  e.preventDefault()
  if (inputValue === '') {
    textArea.textContent = 'please insert value';
    return;
  }
  // if (boysArr.includes(inputValue)) {
  //   textArea.textContent = 'boy'
  // } else if (girlsArr.includes(inputValue)) {
  //   textArea.textContent = 'girl'
  // } else {
  //   textArea.textContent = 'invalid'
  // }

  // for (let i = 0; i < people.length; i++) {
  //   let element = people[i];

  //   if (element.name.toLowerCase().includes(inputValue)) {
  //     let genederText = '';
  //     if(element.gender === 'male') {
  //       genederText = 'boy';
  //     }
  //     else {
  //       genederText = 'girl';
  //     }
  //     textArea.textContent = genederText;
  //     return;
  //   }
  // }
  // //
  // textArea.textContent = 'invalid';

  // let personIndex = people.findIndex((element) => {
  //   if (element.name.toLowerCase() === inputValue) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // });



  // let person = people[personIndex];

  //   if (person === undefined) {
  //     textArea.textContent = 'invalid';
  //   }
  //   else {
  //     Age.textContent = person.age;
  //     if (person.gender === 'male') {
  //       textArea.textContent = 'boy';
  //     }
  //     else {
  //       textArea.textContent = 'girl';
  //     }
  //   }
  // })


  // const x = boys.map(function(item) {
  //   console.log(item);
  //   return {
  //     name: item,
  //     age: 'unknown'
  //   }
  // })


  // let output = [];

  // for (let i = 0; i < boys.length; i++) {
  //   let item = boys[i];
  //   // console.log(item);
  //   output.push({
  //     name: item,
  //     age: 'unknown'
  //   })
  // }

  // console.log(output);

  // console.log('x', x);

  // let newOutPut = [];
  // for (let i = 0; i < people.length; i++) {
  //   let item = people[i]
  //   console.log(item);
  //   if (item.age > 18 && item.gender === 'female' && item.name) {
  //     newOutPut.push({
  //       name: item.name,
  //       age: item.age
  //     })
  //   }
  // }
  // console.log(newOutPut);

  //   let person = '';
  //   for (let i = 0; i < people.length; i++) {
  //     let element = people[i];
  //     if (element.name.toLowerCase() === inputText.value.toLowerCase()) {
  //       person = element.name
  //     }
  //   }
  //   textArea.textContent = person

  // })


  // const ageSelect = document.querySelector('#ageSelect');
  // let option = document.createElement('option');
  // option.textContent = '10';

  // let option2 = document.createElement('option');
  // option2.textContent = '20'
  // ageSelect.appendChild(option);
  // ageSelect.appendChild(option2);

  // ageSelect
  // })

})

// function add(a, b, c) {
//   let sum = a + b + c;
//   return sum;
// }
// let x = add(4, 15, 10);


// Ali
// Hasani
// Ali Hasani

function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
  }
}

function getFullname(firstName, lastName) {
  return firstName + ' ' + lastName
}
let fullName = getFullname('ali', 'rezayi')

let myArr = [-1, -2, -4, -6, -8]
function max(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element > max) {
      max = element

    }
  }
  return max
}
let cc = max([-80, -90, -220, -32])
// console.log(cc);


function min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element < min) {
      min = element
    }
  }
  return min
}
let tt = min([80, 90, 220, 32])
// console.log(tt);


function avg(a, b) {
  return (a + b) / 2
}

// console.log(avg(10, 6));

function avarage(arr) {
  let sum = 0;
  let av = 0
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]

    sum += element
    av = sum / element
  }
  return av
}

let result = avarage([2, 4, 2, 2])
// console.log(result);

const numbersArray = [2, 87, -40, 20, 35, 14];
let resultt = numbersArray.filter((item) => {
  return item > 18

})
// console.log(resultt);

function filterMethod(numbersArray) {
  let myOutPut = []
  for (let i = 0; i < numbersArray.length; i++) {
    let element = numbersArray[i]
    if (element > 18) {
      myOutPut.push(element)
    }
  }
  return myOutPut
}
let ccc = filterMethod([2, 87, -40, 20, 35, 14])
// console.log(ccc);

let numbersArrayIndex = numbersArray.findIndex((itemIndex) => {

  return itemIndex === 2

})

// console.log(numbersArrayIndex);
const numbers = [4, 8, 15, 27, 36]
let y = ((x) => x * x)(10)


// function (a, b) {
//   return a + b * 4 - 8 + 20
// }
let sum = function (a, b) {
  return (a + b) * 2 - 1 / 475 + 2.68 - 439.2
}
// console.log(sum(10, 10));

let summ = ((a, b) => a + b)
// console.log(summ(20,40));

//const numbers = [4, 8, 15, 27, 36]
function myArrr(arr) {

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
  }
}

let nnn = ['abbas', 5, true, -1, 'reza']
// myArrr([1]);

function findMax(arr) {
  let output = null;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element > output) {
      output = element
    }
  }
  return output
}
let re = findMax([2,8,25,30])
console.log(re);

function findIndexMax(arr) {
  let output = null;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (element > output) {
      output = i
    }
  }
  return output
}

let ree = findIndexMax([2,8,25,30])
console.log(ree);