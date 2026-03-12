const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


function repeatCounter(param) {
    return param.reduce((acc, word) => {
        acc[word] = (acc[word] ?? 0) + 1;
        return acc;
    }, {})
}

console.log(repeatCounter(counterWords));

