let hexaColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
  let finalColor = '#'
  for (let i = 0; i < 6; i++) {
    let random = Math.random() * hexaColors.length
    random = Math.floor(random)
    let color = hexaColors[random]
    finalColor = finalColor + color
  }
  const lblColor = document.querySelector('#lbl-color');
  lblColor.textContent = finalColor
  document.body.style.background = finalColor
})
