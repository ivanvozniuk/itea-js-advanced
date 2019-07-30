
export const chorus1 = "There's a feeling I get";
export const chorus2 = "When I look to the west";
export const chorus3 = "And my spirit is crying for leaving";
export const chorus4 = "In my thoughts I have seen";
export const chorus5 = "Rings of smoke through the trees";
export const chorus6 = "And the voices of those who standing looking";

export const verse1 = "And if you listen very hard";
export const verse2 = "The tune will come to you at last";
export const verse3 = "To be a rock and not to roll";
export const verse4 = "And she's buying the stairway to heaven";


export const StairwayToHeaven = ( type =  "verse" ) => {
  if( type === "verse"){
    return `
      ${verse1}
      ${verse2}
      ${verse3}
      ${verse4}
    `;
  } else {
    return `
      ${chorus1}
      ${chorus2}
      ${chorus3}
      ${chorus4}
      ${chorus5}
      ${chorus6}
    `
  }
}



export default StairwayToHeaven;
