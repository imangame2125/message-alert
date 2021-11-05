const testimonials = [
  {
    name: 'john',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
    image: 'https://js-beginners.github.io/testimonial-project/img/customer-0.jpg'
  },


  {
    name: 'sandy',
    quote: 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    image: 'https://js-beginners.github.io/testimonial-project/img/customer-1.jpg'
  },




  {
    name: 'AMY',
    quote: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    image: 'https://js-beginners.github.io/testimonial-project/img/customer-2.jpg'
  },





  {
    name: 'TYRELL',
    quote: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text',
    image: 'https://js-beginners.github.io/testimonial-project/img/customer-3.jpg'
  },





  {
    name: 'WANDA',
    quote: 'Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: 'https://js-beginners.github.io/testimonial-project/img/customer-4.jpg'
  },



]

const customerName = document.querySelector('#customerName');
const customerImg = document.querySelector('#customerImg');
const customerText = document.querySelector('#customerText');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
index = 0;
let result = testimonials[index];
customerText.textContent = result.quote
customerName.textContent = result.name
customerImg.src = result.image
// customerImg.src = result.imag
next.addEventListener('click', (e) => {
  e.preventDefault();
  // e.stopPropagation();
  index++
  if (index > testimonials.length - 1) {
    index = 0
  }
   result = testimonials[index];
  customerText.textContent = result.quote
  customerName.textContent = result.name
  customerImg.src = result.image
  
})


prev.addEventListener('click', (e) => {
  e.preventDefault();
  index--
  if (index < 0) {
    index = testimonials.length - 1
  }
  result = testimonials[index];
  customerText.textContent = result.quote
  customerName.textContent = result.name
  customerImg.src = result.image
})

