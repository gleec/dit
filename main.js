window.onload = () => {

  const menu = document.getElementById('menu');
  const menuButton = document.getElementById('menu-button');
  const close = document.getElementById('close');

  menuButton.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('overflow-hidden');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('overflow-hidden');
  });

  const button = document.getElementById('button-form');

  button.addEventListener('click', () => {
    const form = document.querySelector('form');
    for (let el of form.elements) {
      console.log(el.id, el.value);
    }
  });
};
