import _ from 'underscore'


/**
 *Esta funcion crea un nuevo deck 
 * @param {Array<string>} tiposDeCartas ejemplo = ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo = ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */



// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.lenght===0) 
        throw new ('tiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.lenght===0) 
        throw new ('tiposEspeciales es obligatorio como un arreglo de string');



    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

