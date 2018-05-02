const person = {firstName: 'Sir', lastName: 'Derp', address: '1337 Herp st.', city: 'Seattle', state: 'Washington', zip: '98105'};


(() => {
    const mathResult = 4 + 6 * 12;
    console.log(mathResult);
})

((arrayOne) => {
    for (let number of arrayOne) {
        console.log(number);
    }
})([0,1,1,2,3,5,8,13,21,34]);

var primeNumbers = (arrayPrime) => {
    for (let number of arrayPrime) {
        console.log(number);
    }
};

var displayObject = (person) => {
    for (let property in person) {
        if (person.hasOwnProperty(property)) {
            console.log(property);
        }
    }
};

class calculator {
    constructor(operanda,operandb) {
        this.operanda = operanda;
        this.operandb = operandb;
    }

    add() {
        return this.operanda + this.operandb;
    }

    subtract() {
        return this.operanda - this.operandb;
    }

    multiply() {
        return this.operanda * this.operandb;
    }

    divide() {
        return this.operanda / this.operandb;
    }
}

primeNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
displayObject(person);
var Calculator = new calculator();
console.log(Calculator.add(2,3));
console.log(Calculator.subtract(5,2));
console.log(Calculator.multiply(3,5));
console.log(Calculator.divide(15,3));
