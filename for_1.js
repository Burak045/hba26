const cars = [ "bmw", "audi", "mercedes", "renault", "ford", "porsche", "nissan", "opel"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);

for(let numara = 0; numara < cars.length; numara++){
  console.log("Marka:", cars[numara]);
}

function fotografCek(s) {
  return "F" + s + " ";
}

let carpim = "";
let toplam = 0;

for(let sayi=1; sayi<10; sayi++){
 toplam += sayi;
 carpim += fotografCek(sayi);
}
console.log("Toplam:", toplam);
console.log("Çarpım:", carpim);
