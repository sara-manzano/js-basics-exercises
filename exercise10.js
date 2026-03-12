const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    const sum = param.reduce((acc, val) => acc + val, 0);
    return sum / param.length;
}

console.log(average(numbers));