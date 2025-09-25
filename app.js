const containerWin = document.getElementById("container-wingame");
const containerForm = document.getElementById("container-formulario");
const form = document.getElementById("form");
const inputAttemptNumber = document.getElementById("attempt-number");
const containerDica = document.getElementById("container-dica");

let secretNumber = getRandomInt(101);
console.log(secretNumber);

form.addEventListener('submit', (event) => handleForm(event));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function verifyNumber(number) {
  if(number == secretNumber) {
    return 'Acertou';
  }
  if(number < secretNumber) {
    return 'Maior';
  }
  return 'Menor';
}

function handleForm(event) {
  event.preventDefault();
  game(inputAttemptNumber.value);
}

function game(number) {
  const result = verifyNumber(number);

  containerDica.innerHTML = '';

  switch (result) {
    case 'Acertou':
      win();
      break;
    case 'Maior':
      containerDica.append(sendTipMessage(`O número secreto é maior que ${number}`));
      break;
    case 'Menor':
      containerDica.append(sendTipMessage(`O número secreto é menor que ${number}`));
      break;
    default:
      containerDica.append(sendTipMessage(`Valor ${number} inválido. Tente novamente.`));
  }

  inputAttemptNumber.value = '';
  inputAttemptNumber.onfocus();
}

function sendTipMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.classList.add('tip-message');
  messageElement.innerText = message;

  return messageElement;
}

function win() {
  containerWin.classList.remove('container__unable');
  containerForm.classList.add('container__unable');
}
