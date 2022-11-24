//Desestructuracion de Objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const usarContexto = ({clave, nombre,edad, rango = 'Capitan'}) => {
    // const {nombre, edad, clave} = usuario;

    return {
           nombreClave: clave,
           anios: edad,
           latlng: {
                  lat: 14.1232,
                  lng: -12.1322
           }
    }

}

const {nombreClave,anios,latlng:{lat,lng}} = usarContexto(persona);
console.log(nombreClave, anios);
console.log(lat, lng);