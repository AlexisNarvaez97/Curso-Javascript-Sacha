let sacha = {
    nombre: 'Sacha',
    apellido: 'Lizfas',
    altura: 1.76,
    cantidadDeLibros: 123
}

let alexis = {
    nombre: 'Alexis',
    apellido: 'Narvaez',
    altura: 1.36,
    cantidadDeLibros: 123
}

let gustavo = {
    nombre: 'Gustavo',
    apellido: 'Caixba',
    altura: 1.66,
    cantidadDeLibros: 123
}

let edward = {
    nombre: 'Edward',
    apellido: 'Aurelio',
    altura: 1.86,
    cantidadDeLibros: 123
}

// const esAlta = persona => persona.altura > 1.8;
const esAlta = ({altura}) => altura > 1.8;

const esBaja = ({altura}) => altura < 1.8;


let personas = [sacha, alexis, gustavo, edward];

console.log(personas);

// Filtrado de arrays.
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
// let personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.8;
// })

console.log('Personas Altas', personasAltas);
console.log('Personas Bajas', personasBajas);


// Transformar arrays

const pasarAlturaCms = (persona) => {

    // return persona.altura = persona.altura * 100
    // persona.altura *= 100;
    // return persona


    return { // Nuevo objeto para no afectar al array original
        ...persona,
        altura: persona.altura * 100 
    }

}

var personasCms = personas.map(pasarAlturaCms);

console.log('Altura al 100', personasCms);



// Reducir un array a un valor unico

// var acum = 0

// for( var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

// console.log(acum);

// Reduce

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros;
}

var totalLibros = personas.reduce(reducer, 0)

console.log(totalLibros);


