/// type conditionnel
// https://www.youtube.com/watch?v=Hg9rPl7Z4zA 
class Poisson {

}

class Chat {

}

// function de base  de raisonement 
function generatorFirst(options: {nager: any} | {sauter: any}) {
  if("nager" in options){
    return new Poisson()
  } else {
    return new Chat
  }
}

function generatorSecond <T extends {nager: any} | {sauter: any}>(options: T): T extends {nager:any} ? Poisson : Chat // ici le ternaire peut rendre le code difficile à lire
{
  if("nager" in options){
    return new Poisson()
  } else {
    return new Chat();
  }
}

// TRY 3rd
type AnimalOptions = {nager: any} | {sauter: any}
type AnimalFromOptions<T> =  T extends {nager:any} ? Poisson : Chat

function generator <T extends AnimalOptions>(options: T): AnimalFromOptions<T>
{
  if("nager" in options){
    return new Poisson()
  } else {
    return new Chat();
  }
}

const a = generator({sauter: 'aze'})


///////////////////////////////////////////
//Conditionnel par rapport a une méthode /////////////////////////////////////////////

class Chien{
  cri (){
    return "ouaff"
  }
}
class Tortue{
  cri (){
    return false;
  }
}
// ici la propriété qui est importante est /!\"infer"/!\
// est ce que l'animal a une methode cri qui renvoi quelque chose, si cest le cas alors on utilise la valeur de retour
type AnimalCri<T> = T extends {cri: () => infer U } ? U : never

// maintenant on a bien : 
type B = AnimalCri<Chien> // string
type C = AnimalCri<Tortue> // boolean


////////////////////////////
//    LES MAPPED TYPES  ////
////////////////////////////

// crée un type a partir d'un type deja existant

class FeatureFlags{
  env = "Hello"
  darkMode(){return true}
  privateMode(){return true}
  nsfwMode(){return true}
}

type OptionsFlag<T> = {
  // [key in keyof T]: T[key] extends () => boolean ? boolean : never // retire tout ce qui n'est pas boolean que si nous savons aps le nom de  la clé
  // +readonly [key in keyof T]: boolean  // +readonly ajout la propriété readonly
  // -readonly [key in keyof T]: boolean  // -readonly retire la propriété readonly
  // [key in keyof T]+?: boolean // +? pour dire qu'ils sont optionnels
  [key in keyof T as `get${Capitalize<string & key>}`]: T[key] extends () => boolean ? boolean : never // ici rename les cle en ajoutant get devant

  // /!\IMPORTANT /!\ : toutes les propriété sur https://www.typescriptlang.org/docs/handbook/utility-types.html
  // des dépot supplémentaire sont egalement possible au téléchargement
}

type D = OptionsFlag<FeatureFlags>
// \\