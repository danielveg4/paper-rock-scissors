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

/* forecha no devuelve nada, map sí */

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