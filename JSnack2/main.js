// creao array con vari nomi
var nameIndex;

// array dove vengono inseriti gli oggetti che fanno parte dell'intervallo scelto dall'utente
var outputIndex = [];

nameIndex = [

    {
        'nome' :'Erika',
    },
    {
        'nome' : 'Alessandra',
    },
    {
        'nome' : 'Giulia',
    },
    {
        'nome' : 'Andrea',
    },
    {
        'nome' : 'Simone',
    },
    {
        'nome' : 'Federico',
    },
    {
        'nome' : 'Giuseppe',
    },
    {
        'nome' : 'Francesca',
    },
    {
        'nome' : 'Mattia',
    },

];

//chiedo all'utente di inserire due numeri interi compresi tra 0 e numero di oggetti dell'array ( in questo caso è 9 )

var limiteInf = prompt('Inserire il limite inferiore ( numeri da 0 a 9 ) : ');

var limiteSup = prompt('Inserire il limite superiore ( numeri da 0 a 9 ) : ');

//ciclo per inserire nel nuovo array la porzione di array principale selezionata dall'utente

for (var i = limiteInf ; i < limiteSup; i++) {
    outputIndex.push(nameIndex[i]);
}

//console.log

console.log(nameIndex);
console.log(outputIndex);
