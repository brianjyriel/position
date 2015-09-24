/**
 * second WOD of the week
 * Created by brianjyriel on 9/23/15.
 */

function position(num1, num2)
{
  var cursor = 0;
  while( (num1[cursor] <= num2) && (cursor < num1.length) ) {
    if(num1[cursor] === num2) {
      return cursor;
    }
    cursor++;
  }
  return cursor;
}
var testNums = [1, 3, 5, 6];

console.log(position(testNums, 5));
console.log(position(testNums, 2));
console.log(position(testNums, 7));
console.log(position(testNums, 0));