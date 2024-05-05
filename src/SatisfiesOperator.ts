type Colors = Record<string, [number, number, number ] | string >

function demo(c:Colors){

}

const oldColors = {
  blue:[0,0,255],
  red: '#FF0000',
  green: [0,255,0 ]
} as Colors

oldColors.green.map(v => v/2) // ici map ne marche pas car il a perud la valeur du tableau 

demo(oldColors)


const colors = {
  blue:[0,0,255],
  red: '#FF0000',
  green: [0,255,0 ]
} satisfies Colors // nous utilisons satisfies au lieu de as et la plus de soucis


colors.green.map(v => v/2) 

// /!\IMPORTANT/!\ hors mis l'initialition des variables il faut utiliser le SATISFIES 

demo(colors)


export default {};
