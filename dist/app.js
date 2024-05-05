"use strict";
const cb = (e) => {
    return 3;
};
// utilisation du   as pour définir un element 
const compteur = document.querySelector('#compteur');
// const compteur = document.querySelector('#compteur')! as HTMLButtonElement; 
// ! ou "as HTMLButonElement" signifie aussi que l'element ne peut etre null 
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
// GENERICS (comme en java) <> Peut etre nommeé de importe quel façon 
function identity(arg) {
    return arg;
}
function first(arg) {
    return arg[0];
}
// grace a cela le params de aa est number et non any
const aa = identity(3);
//ici sans avoir a précisé il return string 
const bb = first(["aze", "czee"]);
// ici on prévice que le type dois avoir a minima un clé length
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize([2, "2"]);
////////////////////
/////  DIVERS   ////
////////////////////
// exemple narowing voir le type de id au début et le type dans els if 
const printId = (id) => {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
};
function exemple(a) {
    if ("value" in a) {
        console.log(a); // a est automatiquement du type HTMLinputElement
    }
    if ("aaaaaaaa" in a) {
        console.log(a); //on ne sait pas ce qu'est a
    }
}
// ici on retourne automaiquement un booleen ( a is Date )
const isDate = (a) => {
    return a instanceof Date;
};
