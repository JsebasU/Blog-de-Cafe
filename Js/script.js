//const btnEnviar = document.querySelector('.boton--primario');




//btnEnviar.addEventListener('click',function(e){
//    console.log(e.target);
//   e.preventDefault();
//    console.log("Enviando formulario")
//});

const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const mensaje = document.querySelector('#mensaje')
const email = document.querySelector('#email')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('change', leerTexto)
email.addEventListener('change', leerTexto)
mensaje.addEventListener('change', leerTexto)

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar
    const { nombre, email,  mensaje} = datos;
    if(nombre === ''|| email === ''|| mensaje === ''){
        monstrarError("Todos los campos son obligatorios",true)
        return
    }

    monstrarError("El formulario fue llenado correctamente")
    console.log("Enviado formulairo");
})

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

function monstrarError(m,er = null){
    const error = document.createElement('P')
    error.textContent = m;

    if(er) {
        error.classList.add('error');
    } else {
        error.classList.add('exito');
    }

    formulario.appendChild( error );
    setTimeout(()=>{
        error.remove();
    },5000)
}