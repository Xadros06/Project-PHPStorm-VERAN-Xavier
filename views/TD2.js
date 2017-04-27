var DernierElement = null;
var previousElementBackGround = null;

function pageLoaded() {
  document.body.addEventListener("click", selection2, false); //Récupère tout le body et ajoute un element (type dévènement (ici sur le clique), Fonction appelé à la fin
} //Pour récupérer un objet du html (ex: paragraphe) --> document.'NomdeLobjet' ou document.getElementById("IdDeLobjet")

function selection(Event){ //Créaion d'un évènement
 if(Event.target.style.background == "purple"){ //Si élément (ex:paragraphe) deja sélectionner car violet
    Event.target.style.background = ""; //Alors s'enlève (la couleur) on le désélectionne
     }
 else {
 Event.target.style.background = "purple"; //  Sinon on le sélectionne
 }
}

function selection2(Event){ //Créaion d'un évènement
  if((Event.target.style.background == "purple") || (Event.target.style.background == "blue")){ //Si élément (ex:paragraphe) deja sélectionner car violet
    Event.target.style.background = ""; //Alors s'enlève (la couleur) on le désélectionne
    if (Event.target == DernierElement){
        DernierElement = null;
    }
  }
  else {
    console.log(Event.target.nodeName);
    if (Event.target.nodeName != "INPUT") {//si le type de l'élément sélectionner n'est pas un bouton ou champs de texte (action possible)
        if (DernierElement != null){
        DernierElement.style.background = "purple"; //DernierElement = celui d'avant
        }
       Event.target.style.background = "blue"; //  Sinon on le sélectionne, ici celui que je slectionne (donc dernier)
       DernierElement = Event.target; // Sauvegarde le dernier element sauvegardé

    }
  }
}

function insertB(Element){ //Ajout d'élément
var creationElement = document.createElement(Element); //Créer l'élément qui à pour type le paramètre passé dans la fonction
var creationTexte = document.createTextNode(document.getElementById("IdZoneDeTexte1").value); //On créer le texte (récupère Element via l'ID et  récupère sa valeur (value)
creationElement.appendChild(creationTexte); //Dans l'élément créer on va mettre le texte enregistrer dans la variable précédente
DernierElement.parentNode.insertBefore(creationElement, DernierElement); // On insert avant le  dernier element (before+last), CreationElement c'est l'élément insséré

}

/*function selection(event) {
  var element = event.target;
  if (previousElement != element)
    previousElementBackGround = element.style.backgroundColor;
  element.style.backgroundColor = "red";
  if (previousElement != null)
    previousElement.style.backgroundColor = previousElementBackGround;
  previousElement = element;

}

function selection2(event) {
  if (!document.getElementById("frameInsert").contains(event.target)) {
    var element = event.target;
    if (previousElement != element)
      previousElementBackGround = element.style.backgroundColor;
    element.style.backgroundColor = "purple";
    if (previousElement != null)
      previousElement.style.backgroundColor = previousElementBackGround;
    previousElement = element;
    insertB(element);
  }
}

function insertB(target) {
  var insert = document.getElementById("toInsert");
  target.before(insert.value);
}
*/


