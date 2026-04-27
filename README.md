# Calculatrice JavaScript avec CI/CD

Projet réalisé dans le cadre du cours Atelier Génie Logiciel - TP5 CI/CD.

## Fonctionnalités

- Addition
- Soustraction
- Multiplication
- Division (avec protection contre la division par zéro)

## Installation

```bash
npm install
```

## Tests

Lancer les tests :
```bash
npm test
```

Lancer les tests avec couverture :
```bash
npm run test:coverage
```

## Pipeline CI/CD

Ce projet utilise GitHub Actions pour automatiser les tests à chaque push sur les branches `main` et `develop`.

Le pipeline :
- Teste le code sur Node.js 18.x et 20.x
- Lance les tests avec couverture
- Affiche les résultats détaillés

## Utilisation

```bash
node src/calculatrice.js
```

## Structure du projet

```
tp5-ci-cd/
├── .github/
│   └── workflows/
│       └── ci.yml          # Configuration du pipeline CI/CD
├── src/
│   └── calculatrice.js     # Code source de la calculatrice
├── tests/
│   └── calculatrice.test.js # Tests Jest
├── package.json
└── README.md
```
