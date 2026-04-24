// Calculatrice simple en JavaScript
function additionner(a, b) {
return a + b;
}
function soustraire(a, b) {
return a - b;
}
function multiplier(a, b) {
return a * b;
}
function diviser(a, b) {
if (b === 0) { 
throw new Error('Division par zéro impossible !');
}
return a / b;
}
// Tests rapides
console.log('5 + 3 =', additionner(5, 3));       
// Attendu : 8
console.log('10 - 4 =', soustraire(10, 4));      
// Attendu : 6
console.log('6 x 7 =', multiplier(6, 7));        
// Attendu : 42
console.log('15 / 3 =', diviser(15, 3));         
// Attendu : 5
function puissance(base, exposant) {
return Math.pow(base, exposant);
// Ou : return base ** exposant;  (syntaxe moderne ES2016)
}
console.log('2^10 =', puissance(2, 10));    
// Attendu : 1024
console.log('3^3 =', puissance(3, 3));       
// Attendu : 27
