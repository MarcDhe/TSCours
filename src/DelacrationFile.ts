// Le but ici est de combler les lacune des dépendances installés qui sont faites en JS 
// https://www.youtube.com/watch?v=_nmlVZU_hvI
// il est possible de rajouter au tsconfig.config un params : "delcaration" : true
// cel a permet de définir un fichier de définition app.d.ts par exemple

// ICi nous prenderons le ca s de google analytics qui en,voie des evenement mais qui est écrit en Js et n'est odnc pas typé.
 Window.ga('send', {
    hitType: 'event',
    eventCategory: 'category'
   })

   // Nous créeons alors un dossier types puis un fichier de définition ga.d.ts

   // une fois la variable créer un faudra dans le fichier tsconfig.json lui dire de prendre en compte ce fichier 
// en rajoutant:
// “include": [
//   "src/types/**/*"
// ]

// Sur NPM un flag est présent a coté du nom du package : DT
// Par défaut React n'a pas de déclaration cependant il est possible de les ajouter ( voir au survol soursi)
// avec par exemple : npm i @types/react

// exemple de scroll-to

import scrollTo from 'scroll-to'; //  marche car clé dans tsconfig "moduleResolution": "node"

scrollTo(500, 1200, {
  ease: 'out-bonce',
  duration: 1500
})