const parola = prompt('inserisci una parola').toLowerCase();
let risultato;

  console.log(pali(parola));

  function pali(palindroma){
    const parolaSplitted = palindroma.split('').reverse();
  
    let parolaReverse = '';

    for(i = 0; i < parolaSplitted.length; i++){
      parolaReverse += parolaSplitted[i]
    }

    if(parola === parolaReverse){
      risultato = 'WOW!! This word is polindrome'
    } else{
      risultato = 'NOPE!! This word is not palindrome'
    }

    return risultato
  }