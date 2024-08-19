const userPointsElement = document.getElementById('user-points');
const pcPointsElement = document.getElementById('pc-points');
const gameOptionsElement = document.getElementById('game-options');
const userMoveElement = document.getElementById('user-move');
const pcMoveElement = document.getElementById('pc-move');
const resultElement = document.getElementById('result');

let userMove = null;
let pcMove = null;
let userPoints = 0;
let pcPoints = 0;

const validMoves = ['rock', 'paper', 'scissor'];
const gameRules = {
    paper: {
        rock: true,
        scissor: false,
        spock: false,
        lizzard: true
    },
    rock: {
        paper: false,
        scissor: true,
        spock: true,
        lizzard: false
    },
    scissor: {
        paper: true,
        rock: false,
        spock: true,
        lizzard: false
    },
    lizzard: {
        paper: true,
        rock: true,
        scissor: false,
        spock: false
    },
    spock: {
        paper: true,
        rock: false,
        scissor: true,
        lizzard: false
    }
};


const setPcMove = () => {
    const randomPcNumber = Math.floor(Math.random() * validMoves.length);
    pcMove = validMoves[randomPcNumber];
}

const setUserMove = event => {
    if (!event.target.dataset.item) {
        return;
    }
    userMove = event.target.dataset.item;
    setPcMove();

}

const setMove = (event) => {
    setUserMove(event);
    if (userMove === pcMove) {
        resultElement.textContent = 'TIE'
    } else if (gameRules[userMove][pcMove] === true) {
        userPoints++;
        resultElement.textContent = 'YOU WIN'
    } else if (gameRules[userMove][pcMove] === false) {
        pcPoints++;
        resultElement.textContent = 'PC WIN'
    }
}

const printMove = (event) => {
    setMove(event);
    userPointsElement.textContent = userPoints;
    pcPointsElement.textContent = pcPoints;
    userMoveElement.textContent = userMove;
    pcMoveElement.textContent = pcMove;    
}


if (document.body.dataset.mode === 'advanced') {
    validMoves.push('lizzard', 'spock')
}


gameOptionsElement.addEventListener('click', printMove);


/* inserción */

/* - Usando éste HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto correspondiente, 
es importante que los números sean consecutivos independientemente de que modifiquemos la lista en el HTML. 
Si elimináramos los "li" el primer item será "Item 1", si añadiéramos dos "li" el siguiente sería "Item 3" y así sucesivamente.

```html
<button>Añadir Elementos</button>
<ul>
  <li>Item 1</li>
</ul>
``` */

const addElementsButtonElement = document.getElementById('button-elements');
const listElement = document.getElementById('list-elements');


const getElements = () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Item ' + (listElement.children.length + 1);

    listElement.append(newLi);
}

addElementsButtonElement.addEventListener('click', getElements);

/* 
- Usando el input range que te doy haz un generador de encabezados.
  El input te permite seleccionar un número del 1 al 6, en función de cual elijas, la etiqueta label mostrará el número elegido 
  (igual que hicimos en el generador de passwords), además al hacer click en el botón se generará un encabezado con el número que 
  hayas elegido y se insertará en el div para encabezados. Si, por ejemplo, eliges el número 3, al hacer click se generará un h3 con 
  el texto "Soy un h3", si eliges un 5, se generará un h5 con el texto "Soy un h5" y así para todos los números.
 */

const labelHeadingElement = document.getElementById('label-heading');
const inputHeadingElement = document.getElementById('input-heading');
const buttonHeadingElement = document.getElementById('button-heading');
const headingsElement = document.getElementById('headings');



const setLabel = () => {
    labelHeadingElement.textContent = `Pulsa el botón para seleccionar el ${inputHeadingElement.value}`;
}

const setHeading = () => {
    labelHeadingElement.textContent = `Has seleccionado el ${inputHeadingElement.value}`;

    const newHeading = document.createElement(`h${inputHeadingElement.value}`);
    newHeading.textContent = `Soy un h${inputHeadingElement.value}`;
    headingsElement.append(newHeading);

    console.log(inputHeadingElement.value)
}

buttonHeadingElement.addEventListener('click', setHeading);
inputHeadingElement.addEventListener('input', setLabel);

/*  Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito 
dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

<h1>Posts</h1>
<!-- Contenedor de posts -->
<div>
  <div>
    <h2>Post de ejemplo</h2>
    <span>Author: Dorian</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
<!-- Fin del contenedor de posts -->
<form>
  <div>
    <label>Title</label>
    <input type="text" />
  </div>
  <div>
    <label>Author</label>
    <input type="text" />
  </div>
  <div>
    <label>Message:</label>
    <textarea></textarea>
  </div>
  <button>Send Post</button>
</form>
 */

const inputTitleElement = document.getElementById('input-title');
const inputAuthorElement = document.getElementById('input-author');
const textAreaMessageElement = document.getElementById('textarea-message');
const sendPostButtonElement = document.getElementById('button-send-post');
const postContainerElement = document.getElementById('new-posts')


const sendPost = (event) => {
    const newTitle = document.createElement('h2');
    newTitle.textContent = inputTitleElement.value;

    const newAuthor = document.createElement('span');
    newAuthor.textContent = inputAuthorElement.value;

    const newMessage = document.createElement('p');
    newMessage.textContent = textAreaMessageElement.value;

    postContainerElement.append(newTitle, newAuthor, newMessage);

    event.preventDefault();
}

sendPostButtonElement.addEventListener('click', sendPost);



/* Crea una función que sea capaz de generar 25 números aleatorios y los devuelva, 
después crea una función que obtenga los 25 números aleatorios de la otra función e inserte en el 
DOM una lista con los números pares y otra con los números impares.

<br> */

const evenNumbersElement = document.getElementById('even-numbers');
const oddNumbersElement = document.getElementById('odd-numbers');

const generateNumbers = () => {
    const numbers = [];

    while (numbers.length < 25) {
        const randomNumber = Math.floor(Math.random() * 100);

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        } else {
        }
    }
    return numbers; 
}

const evenFragment = document.createDocumentFragment();
const oddFragment = document.createDocumentFragment();

const numbersToDOM = () => {

    const numbers = generateNumbers();

    for (let i = 0; i < numbers.length; i++) {
        const newLi = document.createElement('li'); 
        newLi.textContent = numbers[i];
        
        if (numbers[i] % 2 === 0) {
            evenFragment.appendChild(newLi); 
        } else {
            oddFragment.appendChild(newLi); 
        }
    }



    evenNumbersElement.append(evenFragment)
    oddNumbersElement.append(oddFragment)
}

numbersToDOM();

