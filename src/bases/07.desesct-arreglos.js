//Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Krilin'];

const [ , ,personaje2,] = personajes;
console.log(personaje2);

const retornaArreglo = () => {
       return ['ABC', 123]
}
console.log(retornaArreglo());

const [elem1, elem2] = retornaArreglo();
console.log(elem1);
console.log(elem2);


// Tarea

const usarEstado = (valor) => {
       return [valor, () => {console.log('Hola Mundo');}]      
}


const [nombre,setNombre] = usarEstado('Gianluca Santillan');
console.log(nombre);
setNombre()