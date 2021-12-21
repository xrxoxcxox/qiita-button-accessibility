const div = document.getElementById('div');
const button = document.getElementById('button')

const divClick = () => {
  alert('divがクリックされました');
}

const buttonClick = () => {
  alert('buttonがクリックされました');
}

div.addEventListener('click', divClick);
button.addEventListener('click', buttonClick)
