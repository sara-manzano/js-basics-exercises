const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    return param.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log("El resultado de la suma es:", sumAll(numbers));