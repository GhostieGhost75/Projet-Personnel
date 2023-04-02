// Récupération du bouton et de la bulle de texte
var button = document.getElementById("myButton");
var popup = document.getElementById("myPopup");

// Fonction pour afficher la bulle de texte
function showPopup() {
  popup.classList.toggle("show");
}

// Ajout d'un événement pour le clic sur le bouton
button.addEventListener("click", showPopup);
