/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 *
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 *
 * Retournez un tableau contenant les 3 résultats
 *
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 *
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

const axios = require("axios");

const { apiResponse } = require("./11_async");

const parallel = async () => {
  const promise1 = axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  const promise2 = axios.get(`https://jsonplaceholder.typicode.com/todos/2`);
  const promise3 = axios.get(`https://jsonplaceholder.typicode.com/todos/3`);

  const results = await Promise.all([promise1, promise2, promise3]);

  return results.map((value) => value.data)
};

parallel().then(console.log)

;

module.exports = { parallel };
