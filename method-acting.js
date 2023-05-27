'use strict';

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
