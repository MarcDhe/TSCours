

// V1 
// declare var ga : (eventName: string, options: {
//   hitType: string;
//   eventCategory?: string
// }) => void

// V2 avec fusion de Windows
interface Window {
  ga : (eventName: string, options: {
      hitType: string;
      eventCategory?: string
    }) => void
}