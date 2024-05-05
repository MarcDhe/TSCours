declare module 'scroll-to' { // déclarer comme ca car provient d'un package
   const scrollTo: (x: number, y: number, options:{
      ease?: string,
      duration?: number
   }) => void
   // export a définir car provient d'un module
   export {scrollTo}
   // export default scrollTo
}