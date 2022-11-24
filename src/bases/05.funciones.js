//FUnciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, soy ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola, soy ${nombre}`;
const saludar4 = () =>  `Hola, mundo`;

const getUser = () => {
    return {
           uid: 'ABC123',
           username: 'El_Papi1502'
    }
}

const getUser2 = () => ({
           uid: 'ABC123',
           username: 'El_Papi1502'
})


console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());
console.log(getUser());
const user = getUser2();
console.log(user);



function getUsuarioActivo(nombre) {
    return {
           uid: 'ABC567',
           username: nombre
    }
}

// 1 Transformar a una función de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Prueba

const usuarioActivo2 = (nombre) => ({
    uid: 'C001',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const usuario2 = usuarioActivo2('Diego Santillan');
console.log(usuario2);
