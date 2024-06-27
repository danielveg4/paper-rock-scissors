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