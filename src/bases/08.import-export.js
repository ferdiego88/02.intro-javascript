import heroes,{owners} from '../data/heroes'

// console.log(owners);
const getHeroeById = (idx) => heroes.find(({id}) => id === idx);

const getHeroeByOwner = (own) => heroes.filter(({owner}) => owner === own);

// console.log(getHeroeById(2));
// console.log(getHeroeById(3));
// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById
}