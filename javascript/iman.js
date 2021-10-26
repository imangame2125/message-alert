let selectedIndex = -1;
const colors = ['red', 'blue', 'pink'];
const button = document.querySelector('button');

button.addEventListener('click', function() {
    // let color = colors.shift();
    // colors.push(color);
    // document.body.style.background = color

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // selectedIndex = selectedIndex + 1;

    // if (selectedIndex === 3) {
    //     selectedIndex = 0;
    // }
    // let color = colors[selectedIndex];
    // document.body.style.background = color;
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
    // let num = Math.random() * 3
    // num = Math.floor(num)
    // let color = colors[num]
    // document.body.style.background = color

    // ==============================

    const select = document.querySelector('#drp-colors');
    const selectedColor = +select.options[select.selectedIndex].value;
    if(selectedColor===-1){
        document.body.style.background = 'white';
        return
    }
    
   let color = colors[selectedColor];
   document.body.style.background = color
})
