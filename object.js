// Membuat sebuat Object pada JavaScript

const Person = {
  firstName: 'Bagus',
  lastName: 'Adi Saputra',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  // Cara menghitung berat badan ideal pada Anak
  weight: 65,
  height: 172,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100 < this.weight;
  },
};

console.log('Full Name: ' + `${Person.fullName()}`);
console.log(Person.isWeightIdeal());

// Object Part 2

const countries = {
  ID: {
    province: ['Lampung', 'Bali', 'Jawa Tengah'],
    city: ['Lampung Tengah', 'Gianyar', 'DIY  Yogyakarta'],
  },
  MY: {
    province: [],
  },
  TH: {},
};

console.log(countries.ID.province);

// Optional Chaining
console.log(countries?.TH?.province ?? 'Not Found');
