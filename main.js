// Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.
// let sumaListas = (lista1, lista2)=>{
//     let listaNueva = [];
    
// for(let i = 0; i < lista1.length; i++){
//     let save1 = lista1[i];
//     let save2 = lista2[i];
//     let suma = save1 + save2;
//     listaNueva.push(suma);
// }
// return listaNueva;

// }

// console.log(sumaListas([1,2,3,4],[1,2,3,4]));

/////////////////////////////////////////////////////////////////
let sumaListas = (lista1, lista2) => {
    let listaNueva = [];
    for (let i = 0; i < lista1.length; i++) {
      let save1 = lista1[i];
      for (let j = 0; j < lista2.length; j++) {
        if (i === j) {
          let save2 = lista2[j];
          let suma = save1 + save2;
          listaNueva.push(suma);
        }
      }
    }
    return listaNueva;
  };

  console.log(sumaListas([1,2,3,4],[1,2,3,4]));
  console.log(sumaListas([2,4,6,8],[2,4,6,8]));