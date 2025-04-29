// Iegūstam HTML elementu ar ID "display" (piemēram, ievades lauks kalkulatorā)
let display = document.getElementById("display");

// Funkcija, kas pievieno lietotāja ievadīto simbolu vai ciparu esošajam tekstam laukā
function appendValue(value) {
  display.value += value; // Pievieno 'value' (simbolu vai skaitli) pie esošā teksta
}

// Funkcija, kas notīra visu ievades lauku (ekrānu)
function clearDisplay() {
  display.value = ""; // Iestata tukšu tekstu (notīra displeju)
}