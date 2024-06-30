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