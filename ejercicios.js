function ejercicio1() {
  let numero1 = 5;
  let numero2 = 67;
  if (numero1 == numero2) {
    console.log("Los numeros son iguales");
  } else if (numero1 > numero2) {
    console.log("El primer numero es mayor");
  } else {
    console.log("El segundo numero es mayor");
  }
}

ejercicio1();

function ejercicio2() {
  let variable1 = true;
  let variable2 = false;

  if (variable1 && variable2) {
    console.log("La expresion AND es verdadera");
  }
  if (!(variable1 == variable2)) {
    console.log("La expresion NOT es verdadera");
  }
  if (variable1 || variable2) {
    console.log("La expresion OR es verdadera");
  }
}

ejercicio2();

function ejercicio3() {
  let myString = "Hello";
  let myNumber = 76;
  let myBoolean = false;
  let myNull = null;
  let myUndefined;
  let myBigInt = BigInt(243);

  console.log(typeof myString);
  console.log(typeof myNumber);
  console.log(typeof myBoolean);
  console.log(typeof myNull);
  console.log(typeof myUndefined);
  console.log(typeof myBigInt);
}

ejercicio3();

function ejercicio4() {
  let userInput = prompt("Introduce un dato");
  if (userInput === "true" || userInput === "false") {
    console.log(userInput + " es un booleano");
  } else if (!isNaN(userInput)) {
    console.log(userInput + " es un número");
  } else {
    console.log(userInput + " es una cadena de texto");
  }
}

ejercicio4();

function suma(x, y, z) {
  console.log("Primer valor: " + x);
  console.log("Segundo valor: " + y);
  console.log("Tercer valor: " + z);
  console.log("La suma es: " + (x + y + z));
}

suma(2, 4, 5);

function multiplica(x, y, z) {
  console.log("Primer valor: " + x);
  console.log("Segundo valor: " + y);
  console.log("Tercer valor: " + z);
  console.log("La multiplicación es: " + x * y * z);
}

multiplica(45, 3, 2);

function esString(x, y, z) {
  if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
}

esString("Hola", "A", "B");

function verificaVocales(x) {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vocales.includes(x)) {
    console.log("Es una vocal");
  } else {
    console.log("No es una vocal");
  }
}

verificaVocales("a");

function validarEdad(edad) {
  if (edad >= 18) {
    alert("Mayor de edad");
  } else {
    alert("Menor de edad");
  }
}

validarEdad(18);

function ejercicio5() {
  nombres = ["Jose", "Juan", "Luis"];
  nombres.push("Maria"); // Agregar al final del arreglo
  console.log(nombres);
  nombres.pop();
  console.log(nombres); // Agregar al final del arreglo

  let index = nombres.indexOf("Juan");

  if (index !== -1) {
    console.log("El nombre se encuentra en el arreglo");
  } else {
    console.log("El nombre no se encuentra en el arreglo");
  }
}

ejercicio5();

function aplicacionMap() {
  const numeros = [4, 9, 16, 25, 36, 81];
  const map1 = numeros.map((x) => Math.sqrt(x));
  console.log(map1);
}

aplicacionMap();

function ejercicio7() {
  let contador;

  // Bucle for
  for (contador = 1; contador <= 10; contador++) {
    console.log(contador);
  }

  // Bucle while
  contador = 1;
  while (contador <= 10) {
    console.log(contador);
    contador++;
  }

  // Bucle do...while
  contador = 1;
  do {
    console.log(contador);
    contador++;
  } while (contador <= 10);
}

ejercicio7();

function ejercicio8() {
  let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    setMarca: function (nuevaMarca) {
      this.marca = nuevaMarca;
    },
    setModelo: function (nuevoModelo) {
      this.modelo = nuevoModelo;
    },
    setAño: function (nuevoAño) {
      this.año = nuevoAño;
    },
    mostrarInfo: function () {
      console.log(
        `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`
      );
    },
  };

  coche.setMarca("Honda");
  coche.setModelo("Civic");
  coche.setAño(2022);
  coche.mostrarInfo();
}

ejercicio8();
