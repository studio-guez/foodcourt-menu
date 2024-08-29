const xlsx = require('xlsx');

// Chargez le fichier Excel
const workbook = xlsx.readFile('Classeur1.xlsx'); // Remplacez 'votre_fichier.xlsx' par le nom de votre fichier

// Sélectionnez la première feuille du classeur
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertissez la feuille en JSON
const data = xlsx.utils.sheet_to_json(worksheet);
console.log(xlsx.utils.sheet_get_cell(worksheet, 1, 1));

// Parcourez les données et affichez les noms et prix
data.forEach((row) => {
    //console.log(`Nom: ${row.C1}, Prix: ${row.C2}`); // Remplacez 'Nom' et 'Prix' par les colonnes correspondantes de votre fichier Excel
});
