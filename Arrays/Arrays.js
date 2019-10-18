var sacha = {
    nombre: 'Sacha',
    apellido: 'Lizfas',
    altura: 1.76
}

var alexis = {
    nombre: 'Alexis',
    apellido: 'Narvaez',
    altura: 1.36
}

var gustavo = {
    nombre: 'Gustavo',
    apellido: 'Caixba',
    altura: 1.66
}

var edward = {
    nombre: 'Edward',
    apellido: 'Aurelio',
    altura: 1.86
}

var personas = [sacha, alexis, gustavo, edward];

console.log(personas);

console.log(personas[0].nombre);

console.log(personas[0]['altura']);

for( var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}`);
}