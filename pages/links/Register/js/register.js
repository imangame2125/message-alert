function createElements(name) {
  const names = document.createElement(name)
  return names
}

function appendChildBody(name) {
  const append = document.body.appendChild(name)
  return append
}




const container = createElements('div');
const inputDive = createElements('div')
const header = createElements('header')
container.appendChild(header)
const h1 = createElements('h1')
header.appendChild(h1)
h1.textContent = 'welcome to Register'
const numberRegisterDiv = createElements('div')
container.appendChild(numberRegisterDiv)
const members = createElements('label')
numberRegisterDiv.appendChild(members)
numberRegisterDiv.className = 'numberRegister'
members.textContent = 'Number of registrants'
const labele = createElements('label')
numberRegisterDiv.appendChild(labele)
inputDive.className = 'inputTwoDive'
appendChildBody(container)
container.className = 'container'
container.appendChild(inputDive)
const inputFirstName = createElements('input')
inputFirstName.type = 'text'
inputDive.appendChild(inputFirstName)
const inputLastName = createElements('input')
inputDive.appendChild(inputLastName)
inputLastName.id = 'lastName'
inputFirstName.setAttribute('placeHolder', 'firstName ...');
inputLastName.setAttribute('placeHolder', 'LastName ...');
const inputDiv2 = createElements('div')
inputDiv2.className = 'inputDiv2'
container.appendChild(inputDiv2)
const InputAge = createElements('input');
InputAge.setAttribute('placeHolder', 'age ...')
InputAge.type = 'number'
inputDiv2.appendChild(InputAge)
const inputNationalNumber = createElements('input')
inputNationalNumber.setAttribute('placeHolder', 'NatonalNumber ...')
inputDiv2.appendChild(inputNationalNumber)
const inputDiv3 = createElements('div')
inputDiv3.className = 'inputDiv3'
container.appendChild(inputDiv3)
const inputCountry = createElements('input')
const inputEmail = createElements('input')
inputDiv3.appendChild(inputCountry)
inputDiv3.appendChild(inputEmail)
inputCountry.setAttribute('placeHolder', 'country ...')
inputEmail.setAttribute('placeHolder', 'Email ...')
inputEmail.type = 'email'
const inputDiv4 = createElements('div')
container.appendChild(inputDiv4)
const buttonSave = createElements('button')
inputDiv4.appendChild(buttonSave)
inputDiv4.className = 'inputDiv4'
buttonSave.textContent = 'Save'


function validate(obj) {
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    let element = keys[i]
    if (obj[element] === '') {
      alert('Please fill the form.')
      return false;
    }
  }

  let foundItem = database.find((item) => {
    if (item.nationalNumber === obj.nationalNumber) {
      return true
    } else {
      return false
    }
  });

  if (foundItem === undefined) {
    return true;
  }
  else {
    alert('National number is already in database')
    return false;
  }
}

const database = []
let index = 0
buttonSave.addEventListener('click', (e) => {

  e.preventDefault();

  let person = {
    name: inputFirstName.value.toLowerCase(),
    family: inputLastName.value.toLowerCase(),
    age: InputAge.value,
    country: inputCountry.value.toLowerCase(),
    email: inputEmail.value.toLowerCase(),
    nationalNumber: inputNationalNumber.value.toLowerCase(),
  };

  let isValid = validate(person);

  if (isValid) {

    database.push(person);
    index++
    labele.textContent = index
    inputFirstName.value = ''
    inputLastName.value = ''
    InputAge.value = ''
    inputCountry.value = ''
    inputEmail.value = ''
    inputNationalNumber.value = ''

  }


})