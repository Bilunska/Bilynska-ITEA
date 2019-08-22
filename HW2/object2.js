function Calculate() {
 const result = 'The result is:';
 this.sum = function(first, second) {
   console.log(result, first + second);
 }
 this.divide = function(first, second) {
   console.log(result, first - second);
 }
 this.multy = function(first, second) {
   console.log(result, first * second);
 }
 this.substract = function(first, second) {
   if (first != 0) {
     console.log(result, first / second);
   }
   else {
   console.log("Error");
   }
 }
}
const calc = new Calculate();
calc.sum(5, 3);
calc.divide(5, 3);
calc.multy(2, 5);
calc.substract(25,5);