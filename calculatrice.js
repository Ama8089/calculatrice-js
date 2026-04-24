// Calculatrice Avancée v2.0 - Développée par l'équipe A
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
// Ajouter cette fonction à calculatrice.js
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo par zéro impossible !');
    }
    return a % b;
}
// Tester la fonction
console.log('10 % 3 =', modulo(10, 3));   // Attendu : 1
console.log('15 % 4 =', modulo(15, 4));   // Attendu : 3C:\Users\Noureidine\calculatrice-js>git push origin feature/puissance

// Tests rapides
console.log('5 + 3 =', additionner(5, 3));       
// Attendu : 8
console.log('10 - 4 =', soustraire(10, 4));      
// Attendu : 6
console.log('6 x 7 =', multiplier(6, 7));        
// Attendu : 42
console.log('15 / 3 =', diviser(15, 3));         
// Attendu : 5

// Historique des opérations
const historique = [];
function ajouterAHistorique(operation, resultat) {
const entree = {
operation: operation,
resultat: resultat,
date: new Date().toLocaleString()
};
historique.push(entree);
}
function afficherHistorique() {
console.log('=== Historique des calculs ===');
historique.forEach((entree, index) => {
console.log(`${index + 1}. ${entree.operation} = ${entree.resultat}`);
});
}
// Exemple d'utilisation
ajouterAHistorique('5 + 3', additionner(5, 3));
ajouterAHistorique('10 - 4', soustraire(10, 4));
afficherHistorique()
