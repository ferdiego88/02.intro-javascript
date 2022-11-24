
//Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Santillan';

let valorDato = 5;
valorDato = 4;
//console.log(nombre, apellido, valorDato)

if (true) {
    let valorDato = 6;
    console.log(valorDato)
}

const nombreCompleto = `${nombre} ${apellido}`

//console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);

const persona =  {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Torino',
        zip: '154542',
        lat: '21212',
        long: '12254',
    }
};


const persona2 = {...persona};

persona2.nombre = 'Peter'
console.log(persona);
console.log(persona2);