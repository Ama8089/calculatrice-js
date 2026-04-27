/**
 * Module Calculatrice
 * Fournit les opérations mathématiques de base
 */

/**
 * Additionne deux nombres
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} La somme
 */
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

// Exporter les fonctions pour les utiliser ailleurs
module.exports = { additionner, soustraire, multiplier, diviser };
