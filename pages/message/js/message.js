const button = document.querySelector('#btn');
button.addEventListener('click', () => {

  const input = document.querySelector('#input').value
  const pp = document.querySelector('#pp').textContent = input;
  const warning = document.querySelector('#warning');
  if (input === '') {
    warning.className = 'show'
    setTimeout(
      () => {
        warning.className='hide'
      },
      1000
    );


  }




})





