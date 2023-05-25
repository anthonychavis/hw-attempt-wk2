'use strict';

let firstName = 'Anthony',
    lastName = 'Chavis',
    wholeName,
    sumLettersOfWholeName = 0;

firstName = firstName.toUpperCase();
lastName = lastName.toLowerCase();

const wholeNameFxn = (first, last) => (wholeName = first.concat(' ', last));

wholeNameFxn(firstName, lastName);

wholeName.split('').forEach(char => {
    let newChar = char.toLowerCase();
    if (
        newChar.charCodeAt(0) >= 'a'.charCodeAt(0) &&
        newChar.charCodeAt(0) <= 'z'.charCodeAt(0)
    )
        sumLettersOfWholeName++;
});

console.log(sumLettersOfWholeName);
