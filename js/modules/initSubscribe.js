const btn = document.querySelector('.subscribe__btn');
const input = document.querySelector('.subscribe__input');

export const initSubscribe = () => {
  btn.addEventListener('click', () => {
    if (input.value.length > 0) {
      input.value = '';
      btn.disabled = true;
      btn.textContent = '';

      const loader = document.createElement('div');
      loader.className = 'loader';
      btn.append(loader);

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Subscribe now';
      }, 1000);
    }
  });
};