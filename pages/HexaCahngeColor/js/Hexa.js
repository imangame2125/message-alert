const hexaColores = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('#button');
const text = document.querySelector('#text');
button.addEventListener('click', () => {
  let final = '#';
  for (let i = 0; i < 6; i++) {
    let random = Math.random() * hexaColores.length;
    random = Math.floor(random)
    let color = hexaColores[random]
    final += color;


  }
  text.textContent = final;
  document.body.style.background = final
})