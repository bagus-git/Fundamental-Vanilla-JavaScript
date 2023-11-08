// Membuat sebuah Arrray
const namaMantan = ['Komang', 'Made'];
console.log(namaMantan.length);

// Akses indek kedalamsebua Array
const mantanPertama = namaMantan[0];
const mantanKedua = namaMantan[namaMantan.length - 1];

console.log(mantanPertama);
console.log(mantanKedua);

// Perulangan pada Array
namaMantan.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Menambah elemen pada bagian akhir sebuah Array
const newLength = namaMantan.push('Dewi');
console.log(namaMantan);

// Menghapusx elemen di akhir sebuah Array
namaMantan.pop();
console.log(namaMantan);

// Menghapus elemen di awal sebuah Array
namaMantan.shift();
console.log(namaMantan);

// Menambah elemen di bagian awal sebuah Array
namaMantan.unshift('Anggie');
console.log(namaMantan);

// Mencari (nomor) index elemen pada sebuah Array
console.log(namaMantan.indexOf('Made'));

// Menghapus elemen berdasarkan posisi index
namaMantan.splice(namaMantan.indexOf('Made'), 1);
console.log(namaMantan);

// Atau dengan cara
const indexMade = namaMantan.indexOf('Made');
console.log(indexMade);
namaMantan.splice(indexMade, 1);
console.log(namaMantan);

// Menduplikat sebuah Array
const namaMantanLama = namaMantan.slice();

namaMantan.pop();

console.log('Nama Mantan: ', namaMantan);

console.log('Nama mantan lama: ', namaMantanLama);
