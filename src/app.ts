
const cb : (e:MouseEvent) => void = (e:MouseEvent): number => {
  return 3;
}

// utilisation du   as pour définir un element 
const compteur = document.querySelector('#compteur'); 
// const compteur = document.querySelector('#compteur')! as HTMLButtonElement; 
// ! ou "as HTMLButonElement" signifie aussi que l'element ne peut etre null 

let i = 0; 
const increment = (e: Event) => {
  i++
  const span = compteur?.querySelector('span');
  if(span){
    span.innerText = i.toString();
  }

}

compteur?.addEventListener('click', increment)


// déclaration d'un objet avec plusieur clé non connu
// le type uniquement peut ne pas être un objet , l'interface sera fatalement un objet
type User = { firstName: string, lastName: string, [key: string]: string } 
type P = keyof User; // ensemble des clé de User
type UserName = User['firstName'];
type DateString = string;

// GENERICS (comme en java) <> Peut etre nommeé de importe quel façon 
function identity<ArgType>(arg:ArgType): ArgType{
  return arg;
}
function first<Type> (arg: Type[] ): Type{
  return arg[0];
}
// grace a cela le params de aa est number et non any
const aa = identity<number>(3);
//ici sans avoir a précisé il return string 
const bb = first(["aze", "czee"])

type Identity<ArgType> = (arg: ArgType) => ArgType;

// ici on prévice que le type dois avoir a minima un clé length
function consoleSize <Type extends {length: number}>(arg: Type): Type{
  console.log(arg.length);
  return arg;
}
const abb = consoleSize([2, "2"])
////////////////////
/////  DIVERS   ////
////////////////////

// exemple narowing voir le type de id au début et le type dans els if 
const printId = (id: string | number ) => {
    if(typeof id === "number"){
      console.log((id * 3).toString());
    }else{
      console.log(id.toUpperCase());
    }
}
function exemple( a: MouseEvent | HTMLInputElement){
  if("value" in a ){
    console.log(a) // a est automatiquement du type HTMLinputElement
  }
  if("aaaaaaaa" in a ){
    console.log(a) //on ne sait pas ce qu'est a
  }
}

// ici on retourne automaiquement un booleen ( a is Date )
const isDate = (a: any): a is Date => {
  return a instanceof Date;
}
