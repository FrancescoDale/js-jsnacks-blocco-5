// array che contiene i vari oggetti bicicletta

var bykeIndex;

bykeIndex = [

    {
        'model':'type0',
        'weight': 6,
    },
    {
        'model' : 'type1',
        'weight' : 7,
    },
    {
        'model' : 'type2',
        'weight' : 5.2,
    },
    {
        'model' : 'type3',
        'weight' : 6.9,
    },
    {
        'model' : 'type4',
        'weight' : 8.1,
    },
    {
        'model' : 'type5',
        'weight' : 5.1,
    }

];

// test visualizzazione array

console.log(bykeIndex);

var lighterByke; // variabile che prenderà il valore della bicicletta più leggera. la variabile cambierà valore grazie ad un ciclo for che via via le assegna un valore minore di quello della posizione 0 nell'array

lighterByke = bykeIndex[0];

console.log(bykeIndex[0]);

// ciclo for che scorre l'array
for (var i = 0; i < bykeIndex.length; i++) {
    if(bykeIndex[i].weight < lighterByke.weight) {
        lighterByke = bykeIndex[i];
    }
}

console.log(lighterByke);
