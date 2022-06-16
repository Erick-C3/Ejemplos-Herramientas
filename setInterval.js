
const UN_SEGUNDO = 1000;
const UN_MINUTO = UN_SEGUNDO * 60 ;

// setInterval me permite ejecutar un algoritmo repetidas veces entre un tiempo definido
// que necesita ? cuales son sus parametros ? 
// 1º   la funcion a repetir
// 2º   el intervalo de tiempo 
// 3º (extra) parametros al a funcion a repetir

let i = 1; // limitador de intervalo

function funcionRepetir(){
           

    if( i > 5){
        clearInterval(idProceso);// para el intervalo
    }else{
        i++; //5
        console.log("hola");
    }

}


let idProceso =  setInterval(  funcionRepetir  , UN_SEGUNDO);

/* console.log(idProceso);
console.log("un proceso sincronico 1");
console.log("un proceso sincronico 2");
console.log("un proceso sincronico 3");
console.log("un proceso sincronico 4");
console.log("un proceso sincronico 5"); */