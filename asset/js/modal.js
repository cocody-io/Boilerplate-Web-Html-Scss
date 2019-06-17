document.addEventListener("DOMContentLoaded", function(event) {
  initEvent();
  updateModalVisibility();
});

function initEvent() {
  document.getElementById("acceptAgeId").addEventListener("click", acceptAge);
}

function checkModalAge() {
  updateModalVisibility();
}

function closeModal() {
  //set cookie or local
  setAgeLegalAccepted(0);
  updateModalVisibility();
}
function acceptAge() {
  setAgeLegalAccepted(1);
  updateModalVisibility();
}

function updateModalVisibility() {
  document.getElementById("modalWrapperId").style.display =
    isAgeLegalAccepted() == 1 ? "none" : "flex";
}

function setAgeLegalAccepted(value) {
  localStorage.setItem("isOlderThan18", value);
}

function isAgeLegalAccepted() {
  return localStorage.getItem("isOlderThan18");
}

function showRefuseCookie() {
  document.getElementById("infoCookieId").innerHTML =
    'Maison Castel respecte votre choix "Do Not Track" et ne dÃ©posera aucun cookie de suivi sur votre ordinateur.';
  document.getElementById("opposerId").style.display = "none";
  document.getElementById("acceptId").style.display = "inline";
}

function showAcceptCookie() {
  document.getElementById("infoCookieId").innerHTML =
    "Ce site utilise des cookies, en continuant Ã  naviger vous nous autorisez Ã  dÃ©poser un cookie Ã  des fins de mesure d'audience.";
  document.getElementById("acceptId").style.display = "none";
  document.getElementById("opposerId").style.display = "inline";
}
