const namaMantan = ['Anggie', 'Ana', 'Ayana'];

// Perulangan FOR
for (let index = 0; index < namaMantan.length; index++) {
  const element = namaMantan[index];
  console.log(element);
}

// Perulangan While
let index = 0;

while (index < namaMantan.length) {
  const element = namaMantan[index];
  console.log(element);
  index++;
}

// Perulangan Menggunakan Method Map
console.log(
  namaMantan.map(function (mantan, ke) {
    return `${mantan} adalah mantan ke ${ke + 1}`;
  })
);

// Perulangan menggunakan Method Join
console.log(
  namaMantan
    .map(function (mantan, ke) {
      return `${mantan} adalah mantan ke ${ke + 1}`;
    })
    .join(';')
);

// Perulangan menggunakan Method Filter
console.log(
  namaMantan
    .filter(function (mantan, ke) {
      return mantan != 'Ana';
    })
    .map(function (mantan, ke) {
      return `${mantan} adalah mantan ke ${ke + 1}`;
    })
);
