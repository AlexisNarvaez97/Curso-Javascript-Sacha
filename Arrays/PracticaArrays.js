let alexis = {
  nombre: "Alexis",
  apellido: "Narvaez",
  edad: 21,
  peso: 59 + "kg",
  pelicula_favorita: "Ciudad de dios",
  altura: 1.76,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 30
    },
    {
      nombre: "Videojuegos",
      duracion: 1
    }
  ]
};

let gustavo = {
  nombre: "Gustavo",
  apellido: "Caixba",
  edad: 23,
  peso: 43 + "kg",
  pelicula_favorita: "XXX",
  altura: 1.96,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 40
    },
    {
      nombre: "Videojuegos",
      duracion: 2
    }
  ]
};

let gerardo = {
  nombre: "Gerado",
  apellido: "Cetzal",
  edad: 25,
  peso: 90 + "kg",
  pelicula_favorita: "Bob Esponja",
  altura: 1.56,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 50
    },
    {
      nombre: "Videojuegos",
      duracion: 3
    }
  ]
};

let raul = {
  nombre: "Raul",
  apellido: "Ramirez",
  edad: 22,
  peso: 74 + "kg",
  pelicula_favorita: "Spiderman",
  altura: 1.98,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 10
    },
    {
      nombre: "Videojuegos",
      duracion: 2
    }
  ]
};

let luis = {
  nombre: "Luis",
  apellido: "Aguirre",
  edad: 24,
  peso: 21 + "kg",
  pelicula_favorita: "Cars",
  altura: 1.46,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 89
    },
    {
      nombre: "Videojuegos",
      duracion: 9
    }
  ]
};

let ezequiel = {
  nombre: "Ezequiel",
  apellido: "Rodriguez",
  edad: 24,
  peso: 89 + "kg",
  pelicula_favorita: "Free Fire",
  altura: 1.26,
  pasatiempos: [
    {
      nombre: "Caminar",
      tiempo: 90
    },
    {
      nombre: "Videojuegos",
      duracion: 7
    }
  ]
};

let players = [alexis, gustavo, luis, raul, gerardo, ezequiel];




const sonVicios = (persona) => {

    persona.pasatiempos.duracion;

    return persona.pasatiempos[0].tiempo > 50;
    
    // console.log(persona.pasatiempos[0].tiempo > 50);

};

const vicios = players.filter(sonVicios);

// console.log(alexis);
// console.log(players);

console.log(vicios);

