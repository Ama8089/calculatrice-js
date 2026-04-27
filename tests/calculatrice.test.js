// Importer les fonctions à tester
const { additionner, soustraire, multiplier, diviser } = require('../src/calculatrice');

// describe() groupe les tests liés
describe('Calculatrice - Tests de base', () => {
    test('Additionner 2 + 3 doit valoir 5', () => {
        expect(additionner(2, 3)).toBe(5);
    });

    test('Additionner nombres négatifs : -1 + -2 = -3', () => {
        expect(additionner(-1, -2)).toBe(-3);
    });

    test('Soustraire 10 - 4 doit valoir 6', () => {
        expect(soustraire(10, 4)).toBe(6);
    });

    test('Multiplier 3 * 4 doit valoir 12', () => {
        expect(multiplier(3, 4)).toBe(12);
    });

    test('Diviser 10 / 2 doit valoir 5', () => {
        expect(diviser(10, 2)).toBe(5);
    });

    test('Diviser par zéro doit lever une erreur', () => {
        // expect().toThrow() vérifie qu'une erreur est lancée
        expect(() => diviser(5, 0)).toThrow('Division par zéro impossible !');
    });
});
