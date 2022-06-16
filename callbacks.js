// callback -> una funcion que llama a otra funcion
// lo usamos para ejecuciones asincronicas


//ejemplo sincronico
// mejor ejemplo lo tenemos con setInterval


function funcionUno(){
    console.log("Hola soy la funcion 1");
}

function funcionDos(){
    console.log("Hola soy la funcion 2");
}

// usamos callback
function funcionPrincipal(funcionParametro){
    console.log("Hola soy la funcion principal");
    funcionParametro();
}

funcionPrincipal( funcionDos );