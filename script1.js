let pariOdispari = prompt('scegli, pari o dispari?').toLowerCase();
console.log(Number(pariOdispari))

while(!isNaN(pariOdispari) || (pariOdispari !== 'pari' && 'dispari')){
  alert('Inserire la PAROLA pari o dispari');
  pariOdispari = prompt('scegli, pari o dispari?').toLowerCase();
}

let num = parseInt(prompt('scegli un numero da 1 a 5'));

while(num < 1 || num > 5){
  alert('Inserire un numero da 1 a 5');
  num = parseInt(prompt('scegli un numero da 1 a 5'));
}

const computerNum = randomNumber(1, 5);
const tot = num + computerNum;
const risultato = document.getElementById('_risultato');
document.getElementById('_computer').innerHTML = 'Il computer ha scelto = ' + computerNum;
document.getElementById('_numbers').innerHTML = num + ' + ' + computerNum + ' = ' + tot;

winner(tot, pariOdispari, risultato);


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function winner(totale, scelta, esito) {
  if(totale % 2 && scelta === 'dispari'){
    esito.innerHTML = 'HAI VINTO!!';
  }
  else if( !(totale % 2) && scelta === 'dispari'){
    esito.innerHTML = 'HAI PERSO!!';
  }
  else if( !(totale % 2) && scelta === 'pari'){
    esito.innerHTML = 'HAI VINTO!!';
  }
  else if(totale % 2 && scelta === 'pari'){
    esito.innerHTML = 'HAI PERSO!!';
  }
}

