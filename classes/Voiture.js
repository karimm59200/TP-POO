import Vehicule from "./Vehicule.js";

 export default class Voiture extends Vehicule{
  constructor(marque, modele, kilometrage, annee,climatisee){
    super(marque, modele, kilometrage, annee);
    this.climatisee=climatisee;
  }
    display(){
      
      return `Auto : ${super.display()} ${this.climatisation ? 'avec climatisation' : 'sans climatisation'}`;
        
      
    }

}