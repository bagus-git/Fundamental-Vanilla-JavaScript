const namaMantan = ['Komang', 'Anggie', 'Made'];

console.log(
  namaMantan.reduce(function (acc, mantan, ke) {
    acc[mantan] = `Mantan ke ${ke + 1}`;

    return acc;
  }, {})
);
