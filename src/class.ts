
//lecture seul avec read only
function revers<T>(arr: readonly T[]): readonly T[]{
  // erreur
  // return arr.reverse();
  return [...arr].reverse();
}
// marche comme en java
class A { 
  private a = 3;
  // #a = 3;  pour les nouvelles versions de javascript permet de vraiemtn bloqué car a est accessible aveec privat 
  // const aInstance = new A();
  // console.log(aInstance['a']) 
  protected b = 3; // utilisable par les enfants également class B extend A 
  public c = 3;
}

const aInstance = new A();
console.log(aInstance.a)

class Collection<T>{
  constructor(private items: T[]){

  }
  first (): T | null{
    return this.items[0] || null
  }
}

const a = new Collection([1, 2]);
const b = a.first();

// Attribué a THIS le HTMLINPUTELEMENT , permet à this de prendre automatiquement toutes 
//les methodes pour un HTMLInputElment
class Subscriber{
  on (this: HTMLInputElement , name: string, cb: Function){
    this.addEventListener
  }
}

// ou un ca splus tricku
class CollectionBis<T>{
  constructor(private items: T[]){

  }
  first (): T | null{
    return this.items[0] || null
  }
  // this permet de retourner la même instance du tableau (surtout pour garder le même typage )
  add (item: T): this {
    this.items.push(item)
    return this 
  }
  isEqual( a: this){
    return a.items === this.items
  }
}

const collectOne = new CollectionBis([3, 3, 4]);

const c = collectOne.add(3); // retourne tout le tableau 

// autre uitilisation peu courante

class SubCollectionBis<T> extends CollectionBis<T>{
  a=3
}

const ab = new SubCollectionBis([1,2]);
collectOne.isEqual(ab); // si la subcolleciton n'a pas d'autre params en plus que collectionBis alros cela marche
// sinon une erreur apparait , comparaison sur la structure uuniqueement

abstract class Geometry {
  x = 0 
  y = 0
  abstract surface() : number
  // static origin = {x:0, y:0};
  // en utilisant la methode vu rpecemendt
  static #origin;
  static {
    Geometry.#origin = {y:0 , x:0};
  }
}
// ici pour créé Geometry il faudra absolment renseigner la methode abstrac 
class Triangle extends Geometry{
  x= 0
  y= 0
  surface(): number {
      return 3;
  }
}

