const btn = document.querySelector('.subscribe__btn');
const input = document.querySelector('.subscribe__input');

const handleInput = () => {
  if (input.value.length > 0) {
    input.value = '';
    btn.textContent = '';

    const loader = document.createElement('div');
    loader.className = 'loader';
    btn.append(loader);

    setTimeout(() => {
      btn.innerHTML = 'Subscribe now';
    }, 1000);
  }
};

export const initSubscribe = () => {
  input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      handleInput();
      input.blur();
    }
  });

  btn.addEventListener('click', handleInput);
};
