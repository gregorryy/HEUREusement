function afficherHeure() {
  const maintenant = new Date();
  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");
  const secondes = String(maintenant.getSeconds()).padStart(2, "0");

  const heureFormatee = `${heures}:${minutes}:${secondes}`;
  document.getElementById("horloge").textContent = heureFormatee;
}

// Appel initial de la fonction pour éviter le délai d'une seconde avant le premier affichage
afficherHeure();
// Mise à jour de l'heure chaque seconde
setInterval(afficherHeure, 1000);
