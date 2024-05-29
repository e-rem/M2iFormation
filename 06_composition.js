/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concat = (arr1, arr2) => (arr1 && arr2 ? [...arr1, ...arr2] : arr1 ? arr1 : arr2 ? arr2 : [] )

console.log("concat");
console.log(concat(array1, array2));
console.log(concat(null, array2));
console.log(concat(array1, null));
console.log(concat(null, null));

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (arr, item) => (arr && item ? [...arr,item] : arr ? arr :  item ? [item] : [])
console.log("push");
console.log(push(array1, 7));
console.log(push(array1, null));
console.log(push(null, 7));
console.log(push(null, null));

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */


console.log("merge");
const merge = (obj1, obj2) => ({...obj1,...obj2})

console.log(merge({a: 1, b: 2}, {c: 3, d: 4}));
console.log(merge(null, null));
console.log(merge({a: 1, b: 2}, null));
console.log(merge(null, {c: 3, d: 4}));

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */
console.log("setName");
const setName = (obj, name1) => ( {...obj,name: name1})

console.log(setName({name: 'toto'},'titi'));

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}