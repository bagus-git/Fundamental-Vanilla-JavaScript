// Belajar Conditional di JavaScript

// Membuat sebuat Object
const Person = {
  firstName: 'Bagus',
  lastName: 'Adi Saputra',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  // Cara menghitung berat badan ideal pada Anak
  weight: 65,
  height: 172,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
  //   Contoh Conditional
  needDiet: function () {
    const weightIdeal = this.weightIdeal();
    if (weightIdeal - 5 > this.weight) {
      return 'you need more protein, need more ' + (weightIdeal - this.weight) + ' ' + 'Kg';
    } else if (weightIdeal + 5 < this.weight) {
      return 'you need a mayo diet, need reduce weight: ' + (this.weight - weightIdeal) + '' + 'Kg';
    } else {
      return 'you are in a good shape';
    }
  },
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());
