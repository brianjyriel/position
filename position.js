/**
 * second WOD of the week
 * Created by brianjyriel on 9/23/15.
 */


/* exported position, testNums */

/**
 * Finds the position in the array of nums where nums should be inserted
 * @param num1 the array of numbers
 * @param num2 the number to be inserted
 * @returns {number} position where it should be inserted
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


//console.log(position(testNums, 5));
//console.log(position(testNums, 2));
//console.log(position(testNums, 7));
//console.log(position(testNums, 0));