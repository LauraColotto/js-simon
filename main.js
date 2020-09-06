// Funzione di check array

function checkArray(arr, num) {
  var checkPresente = false;
  for (var i=0; i< arr.length; i++){
    if (num == arr[i]){
      checkPresente = true;
    }
  }
  return checkPresente;
}

// Creo un array con 5 numeri casuali

var nSimon = [];

for (var i = 0; i < 5; i++) {
  do {
    var nRandom = Math.floor(Math.random()*99+1);
  } while (checkArray(nSimon, nRandom) == true)
  nSimon.push(nRandom);
}

// Li faccio vedere all'utente attraverso un Alert
alert("Guarda bene questi numeri!\n" + nSimon);

// Faccio partire un timer di 30 secondi

var secondi = 5;

var countDown = setInterval(function(){
  console.log(secondi);
  $('h1').text(secondi);

  if (secondi == 0){
    clearInterval(countDown);
  }
  secondi--;
},1000);
// Faccio comparire 5 prompt dove l'utente inserisce i 5 muneri che ha visto e confronto ogni singolo numero con l'array nSimon. Se i due numeri sono uguali, pusho il numero dell'utente nell'array


var listaOrdinata = ["primo","secondo","terzo","quarto","quinto"];

var nTrovati = [];

setTimeout(function(){
  for (var i = 0; i < 5; i++) {
    var input = parseInt(prompt("Inserisci il " + listaOrdinata[i] + " numero"));

    if(checkArray(nSimon, input)){
      nTrovati.push(input);
    }
  }

// Stampo l'alert con il risultato
  if (nTrovati.length == 0){
    $('h1').text("Peccato, non hai trovato nessun numero :(");
  } else {
   $('h1').html("Hai trovato " + nTrovati.length + " numeri. </br> I numeri sono: " + nTrovati);
 }

}, (secondi+2)*1000);
