import './style.css';

function dropMenu(selector) {
  const button = document.querySelector(selector);
  button.classList.add('dropDownButton');

  const ul = document.querySelector(`${selector} ul`);
  ul.classList.add('nonVisible');
  ul.classList.add('ulStyle');

  button.addEventListener('click', () => {
    const classListArray = [...ul.classList];
    if (classListArray.includes('nonVisible')) {
      ul.classList.remove('nonVisible');
    } else {
      ul.classList.add('nonVisible');
    }
  });
}

export default dropMenu;
