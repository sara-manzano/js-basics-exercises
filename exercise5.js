const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 is strictly equal to 10')
}

if (number2 / number1 == 2) {
  console.log("number2 divided by number1 equals 2");
}

if (number1 !== number2) {
  console.log("Number1 is strictly distinct from number2");
}

if (number3 != number1) {
  console.log("number3 is distinct from number1");
}

// USA === (Igualdad Estricta):
// 1. Compara VALOR y TIPO (evita que 11 == "11" sea true).
// 2. Evita errores lógicos por conversión automática de datos.
// 3. Es el estándar profesional en JavaScript moderno.

if (number3 * 5 === number1) {
  console.log("number3 times 5 is equal to the numbe1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 times 5 equals number1 AND number1 times 2 equals number2");
}

if ((number2 / 2 === number1 || number1 / 5 === number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}