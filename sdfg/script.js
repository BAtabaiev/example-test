const links = document.querySelector('.product__links');
const share = document.querySelector('.product__share');
const cross = document.querySelector('.product__links-closer');

share.addEventListener('click', () => {
  links.classList.add('product__links-show');
});

cross.addEventListener('click', () => {
  links.classList.remove('product__links-show');
});

const sizeButtons = document.querySelectorAll('.product__size-button');
const colorButtons = document.querySelectorAll('.product__color-button');
const submitButton = document.querySelector('.product__button');

function waitFor(buttons) {
  return new Promise(resolve => {
    buttons.forEach(e => {
      e.addEventListener('click', (current) => {
        buttons.forEach(e => {e.classList.remove('selected')});
        current.target.classList.add('selected');
        resolve();
      });
    })
  });
}

const promise1 = waitFor(colorButtons);
const promise2 = waitFor(sizeButtons);

function addClass() {
  submitButton.classList.add('product__button-active');
}

Promise.all([promise1, promise2])
  .then(addClass)

const list = document.querySelector('.slide__list');
const next = document.querySelector('.slide__button--next');
const prev = document.querySelector('.slide__button--prev');

let position = 0;

move(0);

function move(shift) {
  const count = list.children.length;
  position += shift;

  next.style.visibility = (position >= count - 1) ? 'hidden' : 'visible';
  prev.style.visibility = (position <= 0) ? 'hidden' : 'visible';

  list.style.transform = `translate(${-position * 100}%)`;
}

next.addEventListener('click', () => {
  move(1);
});

prev.addEventListener('click', () => {
  move(-1);
});

window.addEventListener('resize', () => {
  list.style.transform = `translate(0)`;
});
