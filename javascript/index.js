let links = document.querySelectorAll('.link-li');
let input = document.querySelector('#input');
// input.addEventListener('input', () => {
//   let text = input.value.toLowerCase()
//   links.forEach((link) => {
//     let nameLink = link.querySelector('.name').textContent.toLowerCase()
//     if (nameLink.indexOf(text) !== -1) {
//       link.style.display = 'flex'
//     } else {
//       link.style.display = 'none'
//     }
//   })
// })


const names = document.querySelectorAll('.name');
input.addEventListener('input', () => {
  let text = input.value.toLowerCase()
  names.forEach((name) => {
    let nameLink = name.textContent.toLowerCase()
    if (nameLink.indexOf(text) !== -1) {
      name.parentElement.style.display = 'flex'
    } else {
      name.parentElement.style.display = 'none'
    }
  })
})