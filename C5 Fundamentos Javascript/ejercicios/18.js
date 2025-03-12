function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
 if (letra.lenght > 1) return "Dato incorrecto"

  let vocales= ['A','E',"I",'O','U']

if(vocales.includes(letra.toUpperCase())){
  return "Es vocal"
} else {
  return "Dato incorrecto"
}
}


console.log(esVocal('a'));

module.exports = esVocal;
