import {getHeroeById} from './bases/11.import-export'
// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//         //reject('No se pudo encontrar el Heroe');
//     }, 2000);
// } );
// console.log(promesa);

// promesa.then( (heroe) => {
//     console.log('Heroe',heroe);
// })
// .catch(err => console.log(err))

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            
            if (!heroe) {
                reject('No se encontró el Heroe');
            } else {
                resolve(heroe);
            }


        }, 2000);

        } );
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)