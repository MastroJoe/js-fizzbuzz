// creo un ciclo che stampi i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  // se sono multipli di 3 e di 5
  if ((i % 3 == 0) && (i % 5 == 0)) {
    // stampo "FizzBuzz"
    console.log("FizzBuzz");
    // altrimenti se sono multipli di 3
  } else if (i % 3 == 0) {
    // stampo "Fizz"
    console.log("Fizz");
    // altrimenti se sono multipli di 5
  } else if (i % 5 == 0){
    // stampo "Buzz"
    console.log("Buzz");
    // altrimenti
  }else {
    // stampo il numero
    console.log(i);
  }
}
