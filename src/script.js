const fiveNumbers = numbers => {
    if(!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if(numbers.length !== 5){
        console.log('Please provide 5 numbers');
        return;
    }
    const randomNumer = Math.floor(Math.random() * numbers.length);
    console.log(numbers[randomNumer])
}

fiveNumbers([1, 2, 3, 4, 5]);



const threeNumers = numbers =>{
    if (!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if (numbers.length !== 3) {
        console.log('Introduce 3 numeros');
        return;
    }
    const suma = numbers[0] + numbers[1] + numbers[2];
    console.log(suma);
    const media = suma / numbers.length;
    console.log(media)
    const max = Math.max(numbers[0], numbers[1], numbers[2])
    console.log(max)

}

threeNumers([3, 2, 4])


const fiveNumbersArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('El parámetro no es un array');
        return;
    } else if (numbers.length !== 5) {
        console.log('Introduce 5 numeros');
        return;
    }
    const randomNumberToTen = Math.floor(Math.random() * 10 + 1);
    if (numbers.includes(randomNumberToTen)){
        console.log(numbers.indexOf(randomNumberToTen));
    } else {console.log('no contiene el numero')}
    
}

fiveNumbersArray([1,2,3,4,5]);



const emptyArray = numbers =>{
    if (numbers.length !== 0) {
        console.log('El array tiene que estar vacío');
        return;
    }
    const randomNumber = Math.floor(Math.random() * 101);
    const newArray = numbers.push(randomNumber);
    console.log(numbers)
}

emptyArray([]);

const evenOddArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('No es un array!');
        return;
    } else if (numbers.length !== 3) {
        console.log('Introduce 3 valores');
        return;
    }
    const even = [];
    const odd = [];

    const randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber * numbers[0] % 2 === 0) {
        (even.push(randomNumber * numbers[0]))
    } else {odd.push(randomNumber * numbers[0])}
}

evenOddArray([3, 6, 7]);


/* ejercicio dni */

const dniLetter = number => {
    if (!Array.isArray(number)){
        console.log('no es un array!!');
        return;
    } else if (number.length !== 1
    ) {
        console.log('Introduce solo un DNI!');
        return;
    }
    
    const letters = (['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'])

    const resto = number % 23;
    console.log('Esto es el resto: ' + resto);
    letter = letters[resto];
    console.log('Y esta es la letra que falta: ' + letter);
    console.log('Con lo que el DNI es: ' + number + letter)
    
}

dniLetter([72178104])

const threeWordsArray = words => {
    if (!Array.isArray(words)) {
        console.log('no es un array!');
        return;
    } else if (words.length !== 3) {
        console.log('tiene que tener 3 letras');
        return;
    }
    const lettersArray = ([]);
    const firstWord = words[0][0];
    const lastLetterWord = words[0].charAt(words[0].length-1);
    lettersArray.push(firstWord, lastLetterWord);
    console.log(lettersArray)

}

threeWordsArray(['hola', 'como', 'estamos'])


const reverseWord = word => {
        if (typeof word !== 'string') {
        console.log('introduce una palabra');
        return;
    }

    const wordReverse = word.split('');
    const wordReverseArray = wordReverse.reverse()
    console.log(wordReverseArray.join(''))
}

reverseWord('alreves')


const threNames = (names, numbers) =>{
    if (!Array.isArray(names) || !Array.isArray(numbers)) {
        console.log('no es un array!');
        return;
    } else if (names.length !== 3 || numbers.length !== 3) {
        console.log('uno de los arrays no tiene 3 elementos');
        return;
    }

    const fusion = [];
    const fusion1 = names[0]+numbers[0];
    const fusion2 = names[1]+numbers[1];
    const fusion3 = names[2]+numbers[2];
    fusion.push(fusion1, fusion2, fusion3);
    console.log(fusion)

}

threNames(['hola', 'como', 'estamos'], ['1', '2', '3']);



const squareNumers = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('introduce un array');
        return;
    } else if (numbers.length !== 3) {
        console.log('introduce 3 numeros');
        return;
    } 

    const newArray = [];
    const squareFirst = numbers[0] * numbers[0];
    const squareSecond = numbers[1] * numbers[1];
    const squareThird = numbers[2] * numbers[2];

    newArray.push(squareFirst, squareSecond, squareThird);
    console.log(newArray);
}


squareNumers([2, 5, 7])




const startingA = names => {
    if (!Array.isArray(names)) {
        console.log('introduce un array');
        return;
    } else if (names.length !== 3) {
        console.log('introduce 3 numeros');
        return;
    } 

    
    console.log(names[0].startsWith('a'))

}

startingA(['alonso', 'cano', 'asesino']);

const numbersToten = (a) => {
    for (let i = 10; i >= 0; i--) {
            console.log('tabla: ' + a + 'x' + i + '=' + a*i)
    }
}

numbersToten(3);


/* recibe año y edad, debe imprimir "naciste en el año X, en el año X cumpliste X años " */

/* funciçon que recibe un array de 10 numeros e imprime el numero y su cuadrado */

const tenthArray = numbers => {
    for (const number of numbers) {
        console.log('El número es ' + number + ' y su cuadrado es ' + (number*number))
    }
}

const tenthArray2 = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('no es un array');
        return;
    } 
    if (numbers.length !== 10 ) {
        console.log('introduce 10 numeros')
    }

    for (let i = 0; i < 10; i++) {
        console.log('El número es ' + numbers[i] + ' y su cuadrado es ' + (numbers[i]*[numbers[i]]))
    }
}

tenthArray([0,2,3,4,5,6,7,8,13,20])

tenthArray2([0,2,3,4,5,6,7,8,13,20])

/* crea una funcion que reciba una palabra e imprima esa palabra con las vocales en mayusculas */

const upperWord = word => {
  /*   if (typeof word !== 'string'){
        console.log('introduce una palabra')
    }
    if (word.length !== 1){
        console.log('introduce solo una palabra')
    }
} */
    const arrayDividido = word.split('')
    const newWord = []

    for (let i = 0; i <= arrayDividido.length; i++){
        if (arrayDividido[i] === 'a' || arrayDividido[i] === 'e' || arrayDividido[i] === 'i' || arrayDividido[i] === 'o' || arrayDividido[i] === 'u') {
        newWord.push(arrayDividido[i].toUpperCase())
    } else {
        newWord.push(arrayDividido[i])
        }
}
console.log(newWord.join(''))
}

upperWord('mayusculas')

/* crea una funcion que reciba un array con 5 numeros del 1 al 10.
recórrelo y en el bucle genera un numero aleatorio entre el 0 y el numero del array de la vuelta
la funcion debe decir si el numero generado está en el array y en qué posicion */


const numbersToTenRandom = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 5) {
        console.log('introduce 5 numeros en el array');
        return;
    }
    
    for (const number of numbers) {
        const newRandomNumber = Math.floor(Math.random() * number);
        if (numbers.includes(newRandomNumber)){
            console.log('incluye el número ' + number + ' que además está en la posición ' + numbers.indexOf(number))
        } else {console.log('El número ' + newRandomNumber + ' no está en el array')}
    }


}


numbersToTenRandom([1, 3, 5, 7, 9])

/* crea una función que reciba una frase e imprima el numero de veces que
se repite cada vocal */

const vowelsPhrase = phrase => {
    let counterA = 0;
    let counterE = 0;
    let counterI = 0;
    let counterO = 0;
    let counterU = 0;
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const letter of phrase) {
        if (letter === 'a') {
            counterA++;
        } else if (letter === 'e') {
            counterE++;
        } else if (letter === 'i') {
            counterI++;
        } else if (letter === 'o') {
            counterO++;
        } else if (letter === 'u') {
            counterU++;
        }
    }
    console.log(`La vocal a se repite ${counterA} veces, la e ${counterE} veces, la i ${counterI} veces, la u ${counterU} veces y la o ${counterO} veces`)

}


vowelsPhrase('esto es una frase espectacular')

/* multiplica cada uno de los numeros del array por un numero aleatorio del 1 al 10, si el resultado es para para even y si es impar para odd */

const tenArray = numbers => {
    const even = [];
    const odd = [];
    
    for (let i = 0; i < numbers.length; i++) {
        randomNumber = Math.floor(Math.random()*11);
        result = numbers[i] * randomNumber;
        if (result % 2 === 0) {
            even.push(result);
        } else {
            odd.push(result);
        }
    }
    console.log(numbers);
    console.log('even: ' + even);
    console.log('odd: ' + odd);

}

tenArray([1,2,3,4,5,6,7,8,9,10])


/* crea una funcion que reciba un array con 5 palabras, debes imprimir
por consola un array que contenga la inicial y la ultima letra de cada palabra en mayúsculas */


const fiveWords = words => {
    if (!Array.isArray(words)){
        console.log('tiene que ser un array');
        return;
    }

    const newArray = [];

    for (const word of words) {
        firstLetter = word[0];
        lastLetter = word[word.length-1];
        newArray.push(firstLetter.toUpperCase());
        newArray.push(lastLetter.toUpperCase());
        
    }
console.log(newArray)

}

fiveWords(['hola', 'como', 'estamos', 'hoy', 'domingo'])





// Dado este objeto, rellénalo con los datos que te pido usando el array de numbers.


const numbersData = {
  numbers: [10, 32, 31, 68, 91, 24, 51, 47],
  firstFloor: {
    firstRoom: {
      // número + 2
      numbersPlus2: []
    },
    secondRoom: {
      // número - 2
      numbersMinus2: []
    }
  },
  secondFloor: {
    firstRoom: {
      // número * 2
      numbersDouble: []
    },
    secondRoom: {
      // número / 2
      numbersDivided2: []
    }
  },
  thirdFloor: {
    // sólo pares
    onlyEven: [],
    // sólo impares
    onlyOdd: []
  },
  fourthFloor: {
    // número al cuadrado
    squareNumbers: [],
    // número al cubo
    cubeNumbers: []
  },
  fifthFloor: {
    // número aleatorio entre 0 y number
    randomNumbers: []
  },
  sixthFloor: {
    // Array de numbers al revés
    reversedNumbers: []
  }

};

    for (let i = 0; i < numbersData.numbers.length; i++) {
        numbersData.firstFloor.firstRoom.numbersPlus2.push(numbersData.numbers[i] + 2);
        numbersData.firstFloor.secondRoom.numbersMinus2.push(numbersData.numbers[i] - 2);
        numbersData.secondFloor.firstRoom.numbersDouble.push(numbersData.numbers[i] * 2);
        numbersData.secondFloor.secondRoom.numbersDivided2.push(numbersData.numbers[i] / 2);
        numbersData.fourthFloor.squareNumbers.push(numbersData.numbers[i] * numbersData.numbers[i]);
        numbersData.fourthFloor.cubeNumbers.push(numbersData.numbers[i] * numbersData.numbers[i] * numbersData.numbers[i]);
        numbersData.fifthFloor.randomNumbers.push(Math.floor(Math.random() * numbersData.numbers[i]))

        if (numbersData.numbers[i] % 2 === 0) {
            numbersData.thirdFloor.onlyEven.push(numbersData.numbers[i]);
        } else {numbersData.thirdFloor.onlyOdd.push(numbersData.numbers[i]);}
    }

// falta el reverse

console.log(numbersData)







// Dado este objeto, rellénalo con los valores que te pido sacando los datos de la propiedad "phrase". 

const stringsData = {
  phrase: 'El conocimiento es poder, pero la práctica es la clave para desbloquearlo.',
  firstFloor: {
    //Sólo vocales
    vowels: []
  },
  secondFloor: {
    //Sólo consonantes (sin espacios, sin puntos y sin comas)
    consonants: []
  },

  thirdFloor: {
    //El valor asciicode de cada letra
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    asciiCode: []
  },
  fourthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  fifthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y así sucesivamente
    // Si el caracter es un espacio u otro caracter que no sea una letra lo sustituirás por una letra random del alfabeto
    secretCode: []
  }
};

const regexVowles = /[aeiou]/i;
const regexLetters = /[a-z]/i;

for (const letter of stringsData.phrase) {
    if (regexVowles.test(letter)) {
    stringsData.firstFloor.vowels.push(letter);
} else if (regexLetters.test(letter) && !regexVowles.test(letter)) {
    stringsData.secondFloor.consonants.push(letter);
} 

stringsData.thirdFloor.asciiCode.push(letter.charCodeAt());

}



const randomWord = 'z';

for (const letter of stringsData.phrase) {
    if (letter === 'a') {
        stringsData.fifthFloor.secretCode.push('1')
    } else if (letter === 'e') {
        stringsData.fifthFloor.secretCode.push('2')
    } else if (letter === 'i') {
        stringsData.fifthFloor.secretCode.push('3')
    } else if (letter === 'o') {
        stringsData.fifthFloor.secretCode.push('4')
    } else if (letter === 'u') {
        stringsData.fifthFloor.secretCode.push('5')
    } 
}

const consonantes = 'bcdfghjklmnpqrstvwxyz';
let auxSecretCode = '';
for (const letter of stringsData.phrase) {
    if (consonantes.includes(letter)) {
        let previousLetterPosition = consonantes.indexOf(letter) - 1;
        if (previousLetterPosition === -1) {
            previousLetterPosition = consonantes.length -1;
        }
        auxSecretCode += consonantes[previousLetterPosition];
    } else {
        auxSecretCode += letter;
    }
}
console.log(auxSecretCode)

const words = stringsData.phrase.split(' ');

for (const word of words) {
    if (word[0] === word[0].toUpperCase()) {
        stringsData.fourthFloor.wordsInUppercase.push(word);
    } else {
        stringsData.fourthFloor.wordsInLowercase.push(word)
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const randomNumberAlphabet = Math.floor(Math.random() * alphabet.length);
const randomCharacter = alphabet.charAt(randomNumber);
auxSecretCode = auxSecretCode.replaceAll(/[^a-z0-9]/gi, randomCharacter)

console.log(stringsData)

/* forecha no devuelve nada, map sí 
basicamente:
- foreach hace algo con el array pero no devuelve nada, asi que hay que crear un array vacío
- map hace ese algo y devuelve
- filter te devuelve una parte del array filtrada */


wordssss = ['hola', 'Como', 'Estamos', 'hoy']

const filteredWords = wordssss.filter(word => word.charAt(0) === word.charAt(0).toUpperCase());
const mapedWords = wordssss.map(word => word.toUpperCase())
const foreachWords = []
wordssss.forEach(word => {
    foreachWords.push(word.toUpperCase());
  });
console.log(filteredWords)
console.log(mapedWords)
console.log(foreachWords)

/* sort */


namesToSort = ['dani', 'juan', 'pepe', 'alfredo', 'ádrian']
const sortedNames = [...namesToSort].sort ((a, b) => {
    if (a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') > b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) return 1;
    if (b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') < a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) return -1;
    return;
})

console.log(namesToSort, sortedNames)


const multipleArray = numbers => {
    if (!Array.isArray(numbers)) {
        console.log('el parametro no es un array');
        return;
    }
    numbers.forEach((number, index) => console.log(number * index))
}

multipleArray([1,2,3,4,5,6,7])

const indexArray = numbers => {
    if (!Array.isArray(numbers)){
        console.log('el parametro no es un array');
        return;
    }
    const newArray = numbers.map((number, index) => number / (index + 2))
    return newArray;
}

const resultDividedByIndex = indexArray([1,2,3,4,5,6,7])

console.log(resultDividedByIndex)

const upperCaseArray = words => {
    if (!Array.isArray(words)){
        console.log('el parametro no es un array');
        return;
    }
    const upperCaseWords = words.map(word => word.toUpperCase())
    console.log(upperCaseWords)
}


upperCaseArray(['hola', 'como', 'estamos'])

/* some y filter */

const wordsAndLetter = (words, letter) => {
    if (!Array.isArray(words)){
        console.log('el parametro no es un array');
        return;
    }
    const wordsExists = words.some(word => word.toLowerCase().startsWith(letter.toLowerCase()));
    if (!wordsExists) {
        console.log('no hay palabras que empiecen por la letra');
        return;
    } 

    const filteredWords = words.filter(word => word.toLowerCase().startsWith(letter.toLowerCase()));
    return filteredWords;
};

const filteredWords3 = wordsAndLetter(['hola', 'como', 'estamos'], 'e');
console.log(filteredWords3)


const tenthArray3 = numbers => {
    if(!Array.isArray(numbers)){
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 10) {
        console.log('tienen que ser 10 números!')
        return;
    }
    let result = 0;
    numbers.forEach(number => result = result + number);
    console.log(result)
}

tenthArray3([1,2,3,4,5,6,7,8,9,10])

const tenthArray4 = numbers => {
    if(!Array.isArray(numbers)){
        console.log('introduce un array');
        return;
    }
    if (numbers.length !== 10) {
        console.log('tienen que ser 10 números!')
        return;
    }
    
    numbers.forEach(number => console.log('Tenemos el número ' + number + ' - Cuadrado: ' + (number*number) + ' - Cubo: ' + (number*number*number)) )
}


tenthArray4([1,2,3,4,5,6,7,8,9,10])

const wordToVowels = word => {

    vowelsRegex = /[aeiouáéíóú]/;
    const wordToArray = word.split('');
    console.log(wordToArray);
    let newWord = '';
    wordToArray.forEach(letter => {if (vowelsRegex.test(letter)) {
        newWord += letter.toUpperCase()} else {
        newWord += letter;
    }})
    console.log(newWord)
}

wordToVowels('palabrate')


const tenthArray5 = numbers => {
    
    const even = [];
    const odd = [];
    
    numbers.forEach(number => {
        const randomNumber = Math.floor(Math.random() * 11);
        const result = randomNumber * number;
        if (result % 2 === 0) even.push(result);
        else odd.push(result)
        }
    )
    console.log(numbers, even, odd)
}

tenthArray5([1,2,3,4,5,6,7,8,9,10])


/* crea una funcion que reciba un array de 5 palabras, debe imprimir por consola un array
que contenga la inicial y la ultima letra de cada palabra en mayusculas */


const fiveWordsToFirstLetter = words => {
    const newArray = []
    words.forEach(word => {
        firstLetter = word[0].toUpperCase();
        lastLetter = word[word.length-1].toUpperCase()
        newArray.push(firstLetter, lastLetter);
    })
    console.log(newArray)
}


fiveWordsToFirstLetter(['hola', 'como', 'estamos', 'hoy', 'pana'])

/* crea una funcion que reciba un array de 10 numeros y te diga si alguno es mayor de 5 */

const tenthArray6 = numbers => {
    mayoresArray = [];
    menoresArray = [];
    numbers.forEach(number => {
        if (number >= 5) {
            mayoresArray.push(number)
        } else {menoresArray.push(number)}
    })
    console.log('Los mayores son ' + mayoresArray + ' y los menores son ' + menoresArray)
}

tenthArray6([1,2,3,4,5,6,7,8,9])


/* crea una funcion que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud */


const numberAndWord = (words, number) => {
    if (!Array.isArray(words)){
        console.log('pasa un array!');
        return;
    }
    if (words.length !== 5) {
        console.log('introduce 5 palabras')
    }
    wordsSameLengthAsNumber = []
    words.forEach( word => {
        if (word.length == number) {
            wordsSameLengthAsNumber.push(word)
        } else {console.log('palabras con longitud distinta: ' + word)}
        }
        )
    console.log(wordsSameLengthAsNumber)
}


numberAndWord(['hola', 'adios', 'casa', 'perro', 'gato'], 4)


/* crea una función que reciba un array de números y un número y te devuelva un array con los numeros
que sean divisores de ese número */

const numbersAndNumber = (numbers, numberAlone) => {
    if (!Array.isArray(numbers)){
        console.log('pasa un array!');
        return;
    }
    const filteredNumbers = numbers.filter(number => number % numberAlone == 0);
    console.log(filteredNumbers)
}


numbersAndNumber([10,15,18,25,34,40], 4)

/* Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30 */


const usersArrayAge = users => {
    const youngPeople = users.filter(user => user.age < 30);
    return youngPeople;
}

const youngPeople = usersArrayAge([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
    ]); 

console.log(youngPeople)

/* Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor. */

const sortedWords = words => {
    const sortWords = words.sort((a, b) => {
    if (a.length>b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
    } )
    console.log(sortWords)
}

sortedWords(['casa', 'ordenador', 'paula', 'daniel', 'apples'])

/* Crea una función que reciba un array de números desordenados, de forma aleatoria, unos se multiplicarán por 2 
y otros se dividirán por 2, mezcla ese array de forma aleatoria y después ordenalo de menor a mayor */


const randomArray = numbers => {
    
    const result = numbers.map(number => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return number * 2;
        } return number / 2;
    })
        console.log(result)
        const randomSort = result.sort(()=> Math.random( - 0.5))
        console.log(randomSort)
        const sortedArry = randomSort.sort((a, b) => a -b);
        console.log(sortedArry)
    }
    
randomArray([22, 85, 61, 12, 93, 58, 3, 90])

/* Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, 
es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10] */



/* Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos 
que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es... mi hermano es ... No puedes seleccionar ningún elemento más,
sólo el h3.

<header id="header" class="header">
  <h1 id="main-title" class="title">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle">Soy un subtítulo</h2>
  <h3 id="start-point" class="start">
</header> */

const thirdTitleElement = document.getElementById('start-point');
console.log('Soy un h3 con el id ' + thirdTitleElement.id + ' y la clase ' + thirdTitleElement.className + '. Mi padre es ' + thirdTitleElement.parentElement.localName +  ' y mi hermano es ' + thirdTitleElement.previousElementSibling.previousElementSibling.className);






/* - Añadiendo este HTML al que ya tienes, muestra por consola el número de etiquetas que hay de cada elemento.
  - Hay 1 Header
  - Hay 1 h1
    ......
 */


const sectionElement = document.querySelector('section');
console.log('Hay un header: ' + sectionElement);
const allArticleElements = document.querySelectorAll('article');
console.log('Hay ' + allArticleElements.length + ' artículos')

/* añadele un evento de click que muestre en la consola su texto al hacer click. */

const consoleButtonElement = document.getElementById('buttonexercice');

consoleButtonElement.addEventListener('click', () => {
    console.log(consoleButtonElement.textContent)
})

/*  Crea un h1 con el texto "Soy un título ", al ponerte encima con el ratón, deberá cambiar al texto 
a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título" */

const h1Element = document.getElementById('soyUnH1');

h1Element.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Quita de encima!';
})

h1Element.addEventListener('mouseout', () => {
    h1Element.textContent = 'Soy un h1';
})

/*  Agrega un evento que escuche el cambio de tamaño de ventana y haz que un h1 muestre 
el mensaje "La ventana tiene un ancho de ...px y un alto de ...px . */

const windowH1Element = document.getElementById('h1Ventana');

window.addEventListener('resize', () => {
    windowH1Element.textContent = 'La ventana tiene un ancho de ' + window.innerWidth + 'px y un alto de ' + window.innerHeight + 'px . ';
})

/* Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner "Has pulsado la tecla ...", 
como extra puedes poner si ha pulsado alguna combinación de teclas, alt + r, control + g, etc. */

const tecladoElement = document.getElementById('soyUnP');

window.addEventListener('keydown', (event) => {
    tecladoElement.textContent = 'Has pulsado la techa ' + event.key;
})

/*  Crea un select con 4 opciones (la opción por defecto y otras 3) y añade un p con el texto "Seleccione una opción".
 Al seleccionar una opción el texto del p cambiará a "Ha seleccionado ...", si la opción selecionada es la de por defecto, 
 el texto volverá a ser "Seleccione una opción" */

 const selectMessageElement = document.getElementById('text-select');
 const selectElement = document.getElementById('select');

 selectElement.addEventListener('change', () => {
    selectMessageElement.textContent = 'Ha seleccionado la opción ' + selectElement.value;
    if (selectElement.value === 'default') {
        selectMessageElement.textContent = 'Seleccione una opción'

    }
 })

 /* Crea un input de tipo date y un p que diga "Selecciona una fecha", 
 al seleccionar una fecha el p dirá la fecha en texto. 
 Si seleccionas el 26/07/2023 el texto deberá ser "Has seleccionado el 26 de Julio de 2023" */

const inputDateElement = document.getElementById('input');
const textInputDateElement = document.getElementById('text-input');

inputDateElement.addEventListener('change', () => {
    textInputDateElement.textContent = 'Ha seleccionado el ' + inputDateElement.value;
})

/* Crea un formulario para calcular descuentos, pon dos inputs de tipo number, uno para el precio y otro para el descuento, 
añade un botón con el texto "Calcular". Al hacer click en el botón muestra un texto que diga
 "El precio original es ..., aplicando un descuento del ...% el precio final es de ..." */

 const textFormElement = document.getElementById('text-form');
 const formElement = document.getElementById('form');
 const buttonFormElement = document.getElementById('button-form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    textFormElement.textContent = 'El precio orginial es de ' + formElement[0].value + ', aplicando un descuento del ' + formElement[1].value + '% el precio final es de ' + (formElement[0].value - (formElement[0].value / 100 * formElement[1].value))
})

/* Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien 
el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous. */


fiveWordsArray = ['hola', 'como', 'nos', 'encontramos', 'hoy'];

const previusButtonElement = document.getElementById('previus-button');
const nextButtonElement = document.getElementById('next-button');
const textButtonElement = document.getElementById('h2-five');
let slideCounter = 0;

nextButtonElement.addEventListener('click', () => {
    if (slideCounter === fiveWordsArray.length - 1) {
        slideCounter = 0;
    } else {
        slideCounter++
    }
    arrayIndex = fiveWordsArray[slideCounter];
    textButtonElement.textContent = arrayIndex;
})

previusButtonElement.addEventListener('click', () => {
    if (slideCounter === 0) {
        slideCounter = fiveWordsArray.length -1;
    } else {
        slideCounter--
    }
    arrayIndex = fiveWordsArray[slideCounter];
    textButtonElement.textContent = arrayIndex;
})

/* Crea un formulario con dos inputs para username y password. Añade otro input de tipo checkbox que diga "Acepto los términos y condiciones." 
Pon un botón al formulario que permita enviarlo. El botón estará desactivado hasta que hayas escrito un nombre de más de tres caracteres, 
un password de más de 4 caracteres y el checkbox esté activado. La propiedad que permite activar o desactivar un elemento de formulario es "disabled" y es un boolean. 
Al enviar el formulario deberás mostrar por consola el mensaje "El usuario ... ha iniciado sesión". */

const finalFormElement = document.getElementById('final-form');
const finalButtonFomrElement = document.getElementById('final-button-form');

const login = () => {
    console.log(`El usuario ${finalFormElement[0].value} ha iniciado sesión.`)
}

const validateForm = () => {
    const nameValue = finalFormElement[0].value;
    const passwordValue = finalFormElement[1].value;
    const termsCheked = finalFormElement[2].checked;

    if (nameValue.length <= 3 || passwordValue <= 4 || !termsCheked) {
        finalButtonFomrElement.disabled = true;
        return;
    }

    finalButtonFomrElement.disabled = false;
}

finalFormElement.addEventListener('submit', event => {
    event.preventDefault();
    login();
})

finalFormElement.addEventListener('input', validateForm)

/* 
    Crear la estructura HTML
        Campo para la contraseña generada
        Texto para conocer la longitud
        Input range para la longitud
        Botón para generar la contraseña
    JS
        Localizar los elementos del DOM
        Añadir las constantes y variables del proyecto: const allowedCharacteres
        Identificar qué funciones necesitamos: la que genera el pw, la que imprimi el pw, la que asigme la longitud del pw
        Identificar los eventos: cambio del input y click del botón
*/

const passwordCampElement = document.getElementById('password-camp');
const lengthTextElement = document.getElementById('length-text');
const inputRangeElement = document.getElementById('input-range');
const buttonPasswordElement = document.getElementById('button-password');
const uppercaseInputElement = document.getElementById('uppercase-input');
const lowercaseInputElement = document.getElementById('lowercase-input');
const numbersInputElement = document.getElementById('numbers-input');
const symbolsInputElement = document.getElementById('symbols-input');

let allowedCharacters = ''
const uppercaseCharacters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnñopqrstuvwxyz';
const numbersCharacters = '1234567890';
const symbolsCharacters = '+-.,!"·$%&/()=?{}';
let numeroCaracteres = 16;

const setPasswordLength = event => {
    lengthTextElement.textContent = `Length: ${inputRangeElement.value}`;
}

const checkPasswordOptions = () => {
    allowedCharacters = '';
    if (uppercaseInputElement.checked) {
        allowedCharacters += uppercaseCharacters;
    }
    if (lowercaseInputElement.checked) {
        allowedCharacters += lowercaseCharacters
    }
    if (numbersInputElement.checked) {
        allowedCharacters += numbersCharacters
    }
    if (symbolsInputElement.checked) {
        allowedCharacters += symbolsCharacters
    }
    return allowedCharacters; 
}

const getPassword = () => {
    let generatedPassword = '';
    const allowedCharacters = checkPasswordOptions();
    const numeroCaracteres = inputRangeElement.value;
    for (let i = 0; i < numeroCaracteres; i++) {
        const randomNumberPassword = Math.floor(Math.random() * allowedCharacters.length);
        generatedPassword += allowedCharacters[randomNumberPassword];
    }
    return generatedPassword;
}

const printPassword = () => {
    const generatedPassword = getPassword();
    passwordCampElement.textContent = generatedPassword;
}



buttonPasswordElement.addEventListener('click', printPassword);
inputRangeElement.addEventListener('input', setPasswordLength);
uppercaseInputElement.addEventListener('change', checkPasswordOptions)
lowercaseInputElement.addEventListener('change', checkPasswordOptions)
numbersInputElement.addEventListener('change', checkPasswordOptions)
symbolsInputElement.addEventListener('change', checkPasswordOptions)

/* const rootStyles = document.documentElement.style;
rootStyles.setProperty('propiedad', 'color') */

/* Crea un botón web que al pulsarlo genere un color aleatorio para el body y se aplique, haz una funcion para FGB y otra para hexadecimal */

const buttonChangeColorElement = document.getElementById('button-change-color');

const generateRandomRGB = () => {
    const numbersRandomColorRGB = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    const randomColorRGB = `rgb(${numbersRandomColorRGB[0]}, ${numbersRandomColorRGB[1]}, ${numbersRandomColorRGB[2]})`;
    console.log(randomColorRGB)
    return randomColorRGB;
}

const changeBackgroundColorRGB = () => {
    const randomColorRGB = generateRandomRGB();
    const rootStyles = document.documentElement.style;
    rootStyles.setProperty('--background-color', randomColorRGB)
}


buttonChangeColorElement.addEventListener('click', changeBackgroundColorRGB)


/* Crea un div de 20x20px del color que quieras y sincronçizalo con el movimiento del raton, el div deberá quedarse pegada a la flecha de tu ratçon y moverse con él */

const divMoveElement = document.getElementsByClassName('div-move');

const muvingElDiv = (event) => {
    const mouseX = event.x;
    const mouseY = event.y;

    const rootStyles = document.documentElement.style;

    rootStyles.setProperty('--x', `${mouseX}px`);
    rootStyles.setProperty('--y', `${mouseY}px`)
}

window.addEventListener('mousemove', muvingElDiv);


/* PIEDRA, PAPEL O TIJERA

1. HTML y CSS: header y marcador, botones de piedra-papel-tijera
2. Leer los botones y el marcador
3. Jugadas posibles
4. Leer click
5. Jugada aleatoria del PC
6. Mostrar ganador
7. Sumar puntos al marcador

*/

const userPointsElement = document.getElementById('point-user');
const pcPointsElement = document.getElementById('point-pc');
const paperButtonElement = document.getElementById('papel');
const rockButtonElement = document.getElementById('piedra');
const scissorButtonElement = document.getElementById('tijera');
const userPickedElement = document.getElementById('result-user');
const pcPickedElement = document.getElementById('result-pc');
const textResultElement = document.getElementById('result');

let userContador = 0;
let pcContador = 0;

const pcMove = () => {
    const randomNumberPcMove = Math.floor(Math.random() * 3) + 1;
    let pcMoveRound;
    if (randomNumberPcMove === 1) {
        pcMoveRound = 'papel';
        console.log(pcMoveRound);
    } else if (randomNumberPcMove === 2){
        pcMoveRound = 'piedra';
        console.log(pcMoveRound);
    } else if (randomNumberPcMove === 3){
        pcMoveRound = 'tijera';
        console.log(pcMoveRound)
    }
    return pcMoveRound;
}

const userMove = (event) => {
    userMoveRound = event.target.id;
    console.log(`${event.target.id}`);
    return userMoveRound;
}

const resultMove = (event) => {
    const userMoveRound = userMove(event); 
    const pcMoveRound = pcMove();
    if (userMoveRound === pcMoveRound) {
        console.log('empate');
        textResultElement.textContent = 'Empate';
    } else if (
        (userMoveRound === 'piedra' && pcMoveRound === 'tijera') ||
        (userMoveRound === 'tijera' && pcMoveRound === 'papel') ||
        (userMoveRound === 'papel' && pcMoveRound === 'piedra')
    ) {
        textResultElement.textContent = 'El usuario ha ganado';
        userContador++;
        userPointsElement.textContent = userContador;
        
    } else {
        textResultElement.textContent = 'El PC ha ganado';
        pcContador++;
        pcPointsElement.textContent = pcContador;
    }
}

/* const userPointsElement = document.getElementById('point-user');
const pcPointsElement = document.getElementById('point-pc'); */

paperButtonElement.addEventListener('click', resultMove);
rockButtonElement.addEventListener('click', resultMove);
scissorButtonElement.addEventListener('click', resultMove);