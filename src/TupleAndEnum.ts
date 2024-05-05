// Type unknow 
//à utilisé à la place du any lorsque que l'on ne sait pas encore mais il faudra faire un traitement par la suite sur le type avec des conditions 
// ( if => narowing )
function a (arg: unknown){
  if(arg instanceof HTMLInputElement) {
    arg.value = "Hello" 
  }
  
}

// LEs litterales
// as true singifie qu'il ne peut que être true ou as const 
const g = {isPrivate: true as true, isPublic: false};
const d = {isPrivate: true, isPublic: false} as const; // tout l'objet 
const e = {isPrivate: true as const , isPublic: false}; // isPrivate ne peu être changé

////////////////
// LES TUPLES //
////////////////

// la difference entre un tableau et un TUPLE est le fait que le TUPLE est un tableau d'une taille prédéterminer 
// exemple: 
const ax = [1,2,3] as const // par exempl

// si dessous le tableau a une taille de deux et on sait le type de chacune des valeurs
type ListItem = [string, number]
const ay: ListItem  = ['tomate', 2]
const ac: ListItem = ['banane', 3]

// function merge <T extends unknown[], U extends unknown[]>(a: T, b: U) {
//   return [...a, ...b ] as const
// }

// peut aussi s'écrire => a préféré peut être
function merge <T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U] {
  return [...a, ...b ]
}

//ici ad ) les bons type en retour et nom ( string | number )
const ad = merge(ay, [1,2,3 ])


///////  Acces a un index d'un TUPLE   ///////
const ya: string[] = [] as string[]

console.log(ya[0].toUpperCase()); // ici nous n'avons pas derreur cependant ya[0] est undifined
// afin de corrigé se probleme rajoute la commande dans le tsconfig.json qui permet de verifié que les choses ne sont pas nuls
//       "noUncheckedIndexedAccess": true
// attention cela peut avoir des defaut si l'on fait un heck sur le ya.length > 0 alors le code reste quand meme en rouge


////////////////
// LES ENUMS  //
////////////////

enum STEPS {
  Intro = 'Intro',
  Selection = 'Selection',
  Panier = 'Panier',
  Payment = 'payment'
}

const step: STEPS = STEPS.Selection
console.log('step _°> ' + step );
console.log(STEPS[step]);


// Deuxieme type, a premiere vu cela semble la même chose mais lors de la compilation, 
// il remplace chacune des valeurs dans le JS et ne déclare par un objet ENUM
// a faire si l'enum nest fait que une ou deux fois
const enum STEPSBIS {
  Intro = 'Intro',
  Selection = 'Selection',
  Panier = 'Panier',
  Payment = 'payment'
}
