const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
  },
  {
    img: "images/img2.jpg",
    text: 'Drugi tekst'
  },
  {
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
  }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 4000;
let active = 0;



const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}
const changeSlideL = () => {
  active--;
  if (active < 1) {
    active += slideList.length;
  }
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  let key = e.keyCode;
  if (key == 39) {
    clearInterval(indexInterval);
    changeSlide();
    console.log('prawo');
    indexInterval = setInterval(changeSlide, time);
  } else if (key == 37) {
    clearInterval(indexInterval);
    changeSlideL();
    console.log('lewo');
    indexInterval = setInterval(changeSlide, time);
  }
}

window.addEventListener('keydown', keyChangeSlide)