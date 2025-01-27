/**
 * een startgetal wordt telkens verhoogt met 2.
 * dit tot je aan het eindgetal komt.
 * in de console verschijnen telkens de bekomen nummers.
 * Na de lus geef je onderstaande zin in de console
 *
 * Het startgetal __ werd x aantal keer verhoogt met 2
 * x wordt vervangen door het aantal keer.
 *
 * Indien x een oneven getal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een oneven aantal keer gebeurt.
 *
 * Indien x een even gatal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een even aantal keer gebeurt.
 *
 */

let startGetal = 2;
const eindGetal = 12;
for (startGetal; startGetal <= eindGetal; startGetal+=2) {
    console.log(startGetal);
    
}
console.log(`Het startgetal ${startGetal} werd ${eindGetal/2} aantal keer verhoogt met 2.`);