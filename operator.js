// Belajar Operator pada JavaScript

const perkalian = 2 * 3; // Operator Perkalian
console.log(perkalian);

const penjumlahan = 5 + 5; // Operator Penjumlahan
console.log(penjumlahan);

const pembagian = 10 / 2; // Operator Pembagian
console.log(pembagian);

const sisaHasilPembagian = 5 % 3; // Operator Modulus
console.log(sisaHasilPembagian);

const mantan = 5 % 3;

if (mantan == 2) console.log(mantan); // Operator Equal
else console.log('mantan tidak sama dengan 2');

// Atau dengan cara:

if (mantan === 2) {
  // Operator strict Equal
  console.log(mantan);
} else {
  console.log('mantan tidak sama dengan 2');
}

const namaMantan = 10 % 4;
if (namaMantan > 2) {
  //Operator lebih besar
  console.log(namaMantan);
} else {
  console.log('namaMantan nilainya lebih rendah dari 2');
}

let iceCream = '5';
console.log(+iceCream); // Operatpr unary plus
console.log(-iceCream); // Operatpr unary negation
console.log(++iceCream); // Operator Increment
console.log(--iceCream); // Operator Decrement

// Logical Operator
const sayaSukaEsKrim = true;
const sayaSukaHumbergur = true;

if (sayaSukaEsKrim && sayaSukaHumbergur) {
  // Logical AND
  console.log('saya suka es krim dan humbergur');
}

const sayaSukaSusuPutih = true;
const sayaSukaSusuCoklat = false;

if (sayaSukaEsKrim || sayaSukaHumbergur) {
  // Logical OR
  console.log('saya suka susu putih');
} else {
  console.log('saya suka susu coklat');
}

// logical NOT
const sayaSukaJeruk = false;
const sayaSukaApel = false;

console.log(!sayaSukaJeruk); // logical NOT

// Menggabungkan String
const semangka = 'ya saya suka semangka';
const kurma = 'apalagi kurma yang kamu kasih';

console.log(semangka + ' ' + kurma);
// Atau dengan cara
console.log(`${semangka} ${kurma}`);
