function creatElements(name) {
  const createElement = document.createElement(name)
  return createElement
}

function appendbody(name) {
  const bodyAppend = document.body.appendChild(name)
  return bodyAppend
}

const container = creatElements('div')
const header = creatElements('header')
const h1 = creatElements('h1')
container.appendChild(header)
header.appendChild(h1)
h1.textContent = 'To Do List'
container.className = 'container'
appendbody(container)
const divInputBtn = creatElements('div')
divInputBtn.className = 'container-input-btn'
container.appendChild(divInputBtn)
const input = creatElements('input')
const button = creatElements('button')
button.textContent = 'Add'
divInputBtn.appendChild(input)
divInputBtn.appendChild(button)
const divTextBox = creatElements('div');
const ul = creatElements('ul')
ul.className = 'ul-container'
divTextBox.className = 'myTask'
divTextBox.appendChild(ul)
container.appendChild(divTextBox)


const clearBtn = creatElements('button')
clearBtn.textContent = 'clearItem'
container.appendChild(clearBtn)

let outPut = []

let isEditing = false;
let savingItem = '';

button.addEventListener('click', () => {
  let inputValue = input.value



  if (inputValue !== '') {
    let foundItem = outPut.find((item) => {
      return item.toLowerCase() === inputValue.toLowerCase()
    })
    if (foundItem === undefined) {

      let li;
      if (isEditing === false) {
        li = creatElements('li')
        ul.appendChild(li)

        const spanTitle = creatElements('span');
        spanTitle.classList = 'title';
        spanTitle.textContent = inputValue;
        const deleteIcon = creatElements('i')
        li.appendChild(spanTitle);
        // li.textContent = inputValue
        li.className = 'li-container'
        li.appendChild(deleteIcon)
        deleteIcon.textContent = 'X'
        const EditeBtn = creatElements('button')
        const iEditeIcon = creatElements('i')
        li.appendChild(EditeBtn)
        EditeBtn.appendChild(iEditeIcon)
        iEditeIcon.textContent = 'Edit'
        deleteIcon.addEventListener('click', () => {
          const findIndex = outPut.findIndex((item) => {
            return item === inputValue
          })
          if (findIndex !== -1) {
            ul.removeChild(li)
            outPut.splice(findIndex, 1)
          }
        })
        iEditeIcon.addEventListener('click', () => {
          isEditing = true;
          savingItem = inputValue;
          const findIndexEdite = outPut.findIndex((item) => {
            return item === inputValue
          })

          if (findIndexEdite !== -1) {
            input.value = inputValue

            li.classList.add('editing')
          }

        })
      }
      else {
        li = ul.querySelector('.editing');
        li.classList.remove('editing');
        let span = li.querySelector('.title')
        span.textContent = input.value;
        inputValue = input.value;
      }
      if (isEditing === false) {
        outPut.push(inputValue)
      }
      else {
        // ??
        let index = outPut.findIndex(x => x === savingItem);
        outPut[index] = input.value;
      }
      console.log(outPut);
      input.value = ''
      isEditing = false;
      savingItem = '';
    } else {
      alert('tekrari')
    }
  }
})


clearBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.ul-container > .li-container')
  tasks.forEach((item) => {
    item.remove();
  })
  outPut = []
})


// find, findIndex, map, filter
// function, arrow function
// object, method

function createPerson(name, family, address) {
  return {
    name: name,
    family: family,
    address: address
  }
}

const people = [
  createPerson('Iman', 'Majd', {
    city: 'Tehran',
    street: 'Taheri'
  }),
  createPerson('Ehsan', 'Majd', {
    city: 'Tehran',
    street: 'Majidiye'
  }),
  createPerson('Zahra', 'Hasani', {
    city: 'Tehran',
    street: 'Zaferaniye'
  })
]
// console.log(people[0]);
// console.log('Before: ', people);

// Name: Zahra
// Address: { city: 'Tehran', street: 'Vanak' }

// Primitive type ==> stack ===> number, string, boolean, undefined
// Refernce type ===> heap ===> object, array

function homeWork() {
  // let selectedItem = people.find(item => item.name === 'Zahra')
  // if (selectedItem !== undefined) {
  //   selectedItem.address.street = 'Vanak'
  // }
  let arr = [...people]; // people.slice(0);
  let index = arr.findIndex(item => item.name === 'Zahra');
  if (index !== -1) {
    let old = arr[index];
    arr[index] = {
      ...old,
      address: {
        ...old.address,
        street: 'Vanak'
      }
    }


    // arr.splice(index, 1, {
    //   ...old,
    //   address: {
    //     ...old.address,
    //     street: 'Vanak'
    //   }
    // });
  }
  let arr2 = people.map(person => {
    if (person.name === 'Zahra') {
      let n = {
        ...person,
        address: {
          ...person.address,
          street: 'vanak'
        }
      }
      return n;
    }
    else {
      return person;
    }
  });
  return arr2;
}

// Shallow copy, Deep copy!


let newArr = homeWork();

// console.log('After: ', newArr);

// const p1 = createP('Iman', 'majd', 'Tehran Taheri')

// const p2 = createP('Ehsan', 'majd', { city: 'Tehran', alley: 'tageri' })

// function createP(name, family, address) {
//   let p = {
//     name: name,
//     family: family,
//     address: address
//   }
//   return p;
// }

// const arr = [
//   createP('Iman', 'majd', 'Tehran Taheri'),
//   createP('Ehsan', 'majd', 'Tehran Majidiye')
// ]

// spread

let x = {
  name: 'Iman',
  address: {
    city: 'Theran'
  }
}

let y = {
  ...x,
  address: {
    ...x.address
  }
};
y.name = 'David';
y.address.city = 'Ahcvaz'

// console.log('x: ', x)
// console.log('y: ', y);

let o = {
  name: 'Iman',
  age: 10,
  name: 'Hasan'
}

// console.log(o)


// name: string
// level: number
// grades: array
//   ===> name: 'math', score: number

// avg: 18.23

let student1 = {
  name: 'Asghari',
  level: 2,
  grades: [
    { name: 'Math', score: 14 },
    { name: 'Farsi', score: 16 },
    { name: 'Varzesh', score: 18 }
  ]
}


let student2 = {
  name: 'Kazemi',
  level: 3,
  grades: [
    { name: 'Math', score: 18 },
    { name: 'Farsi', score: 14 },
    { name: 'Varzesh', score: 20 }
  ]
}



let student3 = {
  name: 'Rezayi',
  level: 3,
  grades: [
    { name: 'Math', score: 20 },
    { name: 'Farsi', score: 17 },
    { name: 'Varzesh', score: 19 }
  ]
}
let students = []
students.push(student1, student2, student3)

let resultArray = students.map((item) => {
  let Scores = item.grades.map((g) => {
    return (g.score)
  })
  let average = getAverage(Scores)
  return ({
    name: item.name,
    level: item.level,
    grades: item.grades,
    avg: average

  })
})


function getAverage(arr) {
  let sum = 0
  let avg = 0;
  arr.forEach((item) => {
    sum += item

  })
  avg = sum / arr.length
  return avg
}



console.log(resultArray);