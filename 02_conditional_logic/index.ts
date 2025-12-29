//? 14. Check if a Number is Positive, Negative, or Zero
function checkNumber(num: number): string {
  if (num > 0) return `${num} is positive.`;
  else if (num < 0) return `${num} is negative.`;
  else return `${num} is zero.`;
}
console.log(checkNumber(0));

//? 15. Calculate Electricity Bill
/*
    0–100 units → ₹5 per unit
    101–200 units → ₹7 per unit
    201–300 units → ₹10 per unit
    Above 300 units → ₹12 per unit
*/
function calculateElectricityBill(unit: number): number {
  if (unit > 0 && unit <= 100) return 5 * unit;
  else if (unit > 101 && unit <= 200) return 7 * unit;
  else if (unit > 201 && unit <= 300) return 10 * unit;
  else return 12 * unit;
}
console.log(`Rs. ${calculateElectricityBill(3450).toLocaleString()} /- `);

//? 16. Check if a Character is a Vowel or Consonant
function checkCharacter(char: string): string {
  let lowerChar = char?.toLowerCase().trim();

  if (
    !lowerChar ||
    lowerChar.charCodeAt(0) < 97 ||
    lowerChar.charCodeAt(0) > 122
  )
    return "Invalid Character";

  return "aeiou".includes(lowerChar)
    ? "Vowel Character"
    : "Consonant Character";

  /* OR
     if ("aeiou".includes(lowerChar)) return "Vowel Character";
     else if (/[a-z]/.test(lowerChar)) return `Consonant Character`;
     else return "Invalid Character";
  */
}
console.log(checkCharacter("A"));

//? 17. Check if a Year is a Leap Year
function checkLeapYear(year: number): string {
  if (year % 100 == 0 || (year % 4 !== 0 && year % 400 !== 0)) {
    return "Not a leap year";
  }
  return "Leap year";
}
console.log(checkLeapYear(2036));

//? 17. Check Triangle Type Using Sides and Angles
/*
   If a² + b² = c² → Right-angled
    Else if all sides equal → Equilateral
    Else if any two equal → Isosceles
    Else → Scalene
 */
function checkTriangleType(a: number, b: number, c: number): string {
  const formula = a ** 2 + b ** 2 === c ** 2;
  if (formula) return `Right-angle traingle`;
  else if (a === b && a === c) return `Equilateral traingle`;
  else if (a === b || a === c || b === c) return `Isosceles traingle`;
  else return `Scalene traingle`;
}
console.log(checkTriangleType(3, 4, 6));

//? 18. Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharType(char: string): string {
  const charCode = char.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) return "Number";
  else if (
    (charCode >= 58 && charCode <= 64) ||
    (charCode >= 91 && charCode <= 96) ||
    (charCode >= 33 && charCode <= 47) ||
    (charCode >= 123 && charCode <= 126)
  )
    return "Special Character";
  else if (charCode >= 65 && charCode <= 90) return "Uppercase";
  else if (charCode >= 97 && charCode <= 122) return "Lowercase";
  else return "Invalid character!";
}
console.log(checkCharType("%"));

//? 19. Find the Maximum of Three Numbers
function maxOfThreeNums(a: number, b: number, c: number): number {
  if (a > b && a > c) return a;
  else if (b > c) return b;
  else return c;
}

console.log(maxOfThreeNums(21, 22, 22));
