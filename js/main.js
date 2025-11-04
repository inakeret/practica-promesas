/****************Variables****************/
const mostrar = document.querySelector("#mostrar");
const mostrarContainer = document.querySelector("#mostrarContainer") 
const fragment = document.createDocumentFragment();
const chivato = true


/**
 * @typedef {Object} Persona
 * @property {number} id - Identificador único de la persona.
 * @property {string} nombre - Nombre de la persona.
 * @property {string} usuario - Correo electrónico o nombre de usuario asociado.
 */

/** @type {Persona} */
const persona = {
    id: 1,
    nombre: "Benito",
    usuario: "benitocamelas@gmail.com"
};

/*****************************************************************
                            PROMESAS
******************************************************************/


/****************Eventos****************/
/**
 * Maneja el evento de clic sobre el elemento con id = "mostrar" que en este caso es un boton.
 * 
 * Al hacer click:
 * Espera 2 segundos antes de continuar.
 * Llama a la funcion mostrarUsuario().
 *  - Si la promesa se resuelve correctamente, ejecuta pintarObjeto() para mostrar los datos.
 *  - Si ocurre un error, lo captura y muestra mediante pintarError(error).
 * 
 * @event click
 * @listens HTMLElement#mostrar
 */
mostrar.addEventListener("click", () => {
    mostrarContainer.style.display = "none"
    setTimeout(() => {
        mostrarUsuario()
            .then(()=>{
                pintarObjeto()
            })
            .catch((error)=>{
                pintarError(error)
            })
    }, 2000)
});


/****************Funciones****************/
/**
 * Funcion asincrona que devuelve una promesa
 * @returns {Promise} 
 */
const mostrarUsuario = () =>{
    const promesa = new Promise((resolve,reject)=>{
        if (chivato){
            resolve("Todo bien")
        }
        else{
            reject("Usuario no encontrado")
        }
    })
    return promesa;
}



/*****************************************************************
                            ASINCRONO
******************************************************************/

// /****************Eventos****************/
// /**
//  * Maneja el evento de clic sobre el elemento con id = "mostrar" que en este caso es un boton.
//  * 
//  * Al hacer click:
//  * Espera 2 segundos antes de continuar.
//  * Llama a la funcion mostrarUsuario().
//  *  - Si la promesa se resuelve correctamente, ejecuta pintarObjeto() para mostrar los datos.
//  *  - Si ocurre un error, lo captura y muestra mediante pintarError(error).
//  * 
//  * @event click
//  * @listens HTMLElement#mostrar
//  */
// mostrar.addEventListener("click", () => {
//     mostrarContainer.style.display = "none"
//     setTimeout(() => {
//         mostrarUsuario()
//             .then(()=>{
//                 pintarObjeto()
//             })
//             .catch((error)=>{
//                 pintarError(error)
//             })
//     }, 2000)
// });


// /****************Funciones****************/
// /**
//  * Funcion asincrona que devuelve una promesa
//  * @returns {Promise} 
//  */
// const mostrarUsuario = async () =>{
    
//     try{
//         if(chivato){
//             return "Todo bien"
//         }else{
//             throw "Usuario no encontrado"
//         }
//     }
//     catch(error){
//         throw error
//     }
// }

/**
 * Crea un parrafo (objeto del dom) con el contenido del parametro mensaje como textContent
 * @param {String} mensaje 
 * @returns {HTMLElement}
 */
const pintarMensaje = (mensaje) =>{
    mostrarContainer.innerHTML="";
    mostrarContainer.style.display = "block"
    const parrafo = document.createElement("P");
    parrafo.textContent = mensaje
    return parrafo
}

/**
 * Pinta las propiedades del objeto en mostrarContainer
 */
const pintarObjeto = () =>{
    Object.keys(persona).forEach((elemento)=>{
        if(elemento != "id"){
            fragment.append(pintarMensaje(`${elemento}: ${persona[elemento]}`));
        }
    })
    mostrarContainer.append(fragment)
}

/**
 * Pinta el mensaje de error en mostrarContainer
 * @param {string} mensaje 
 */
const pintarError = (mensaje) => {
    mostrarContainer.append(pintarMensaje(mensaje))
}
