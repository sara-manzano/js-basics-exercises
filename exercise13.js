const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(array, name) {
    const index = array.indexOf(name);
    if (index === -1) return false;

    return { found: true, position: index };
}

const result = finderName(nameFinder, 'Tony');
if (result) {
    console.log(`¡Encontrado en el índice ${result.position}!`);
}
