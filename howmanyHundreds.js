/*function howManyHundreds(num) {
    var division = num / 100;
    return Math.floor(division);
}

console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
*/

const howManyHundreds = (num) => (num < 100 ? 0 : (num - (num % 100)) / 100);