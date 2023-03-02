

/**
 * 
 * @param {String} carta Valor de carta 
 * @returns {HTMLImageElement} Imagen carta
 */
// <img class="carta" src="assets/cartas/2C.png">
export const crearCartaHtml = (carta)=>{
    if(!carta) throw new Error ('La carta es un argumento obligatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
