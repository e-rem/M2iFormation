
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo2");
        }, 2000);
      });

      return myPromise;
};

sleep().then( (val) => console.log(val) )
module.exports = {sleep};