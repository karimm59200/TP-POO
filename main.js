import Voiture from "./classes/Voiture.js";
import Moto from "./classes/Moto.js";


console.log("coucou");

 let result = document.querySelector("#result");
//  console.log(result);




let voiture = new Voiture("Renault","Kangoo",240000,2003,"clim");
console.log(voiture);

let moto = new Moto("bmw", "R1150R Rockster", 65000,2005);
console.log(moto);


result.innerHTML += ` <p>Voiture: ${voiture.marque}-${voiture.modele}-${voiture.kilometrage}-${voiture.climatisee}</p>`;
result.innerHTML += `<p>Moto: ${moto.marque}-${moto.modele}-${moto.kilometrage}</p>`