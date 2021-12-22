const div = document.getElementById('div');
const button = document.getElementById('button')

const divClick = () => {
  alert('divがクリックされました');
}

const divKeyup = (e) => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    alert('divに対してキーが押されました');
  }
}

const buttonClick = () => {
  alert('buttonがクリックされました');
}

div.addEventListener('click', divClick);
div.addEventListener('keyup', divKeyup)

button.addEventListener('click', buttonClick)
