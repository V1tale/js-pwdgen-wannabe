// Input
const insertName = prompt ("inserisci il tuo nome");
const insertLastName = prompt ("Inserisci il tuo cognome");
const insertFavouriteColor = prompt ("il tuo colore preferito");
console.log(insertName, typeof insertName);
// PROCESSING
const result = `La tua password è: ${insertName}${insertLastName}${insertFavouriteColor}21`
// OUTPUT
document.getElementById ("password").innerHTML = result;