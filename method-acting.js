'use strict';

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName.toUpperCase();
    }

    get lastName() {
        return this._lastName.toLowerCase();
    }

    get wholeName() {
        return this.firstName.concat(' ', this.lastName);
    }

    get wholeNameNormal() {
        return this._firstName.concat(' ', this._lastName);
    }

    get sumLettersOfWholeName() {
        return this.wholeName
            .toLowerCase()
            .split('')
            .filter(
                letter =>
                    letter.charCodeAt(0) >= 'a'.charCodeAt(0) &&
                    letter.charCodeAt(0) <= 'z'.charCodeAt(0)
            ).length;
    }
}

const anthony = new Person('Anthony', 'Chavis');

console.log(anthony.lastName);
console.log(anthony.firstName);
console.log(anthony.wholeName, anthony.wholeNameNormal);
console.log(anthony.sumLettersOfWholeName);

/*
// before using a Class
let firstName = 'Anthony',
    lastName = 'Chavis',
    wholeName,
    sumLettersOfWholeName = 0;

firstName = firstName.toUpperCase();
lastName = lastName.toLowerCase();

const wholeNameFxn = (first, last) => (wholeName = first.concat(' ', last));

wholeNameFxn(firstName, lastName);

wholeName
    .toLowerCase()
    .split('')
    .forEach(char => {
        if (
            char.charCodeAt(0) >= 'a'.charCodeAt(0) &&
            char.charCodeAt(0) <= 'z'.charCodeAt(0)
        )
            sumLettersOfWholeName++;
    });

console.log(sumLettersOfWholeName);
*/
