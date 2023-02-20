//Variables y selectores
const formulario = document.querySelector("#formulario");
const gastolistado = document.querySelector("#lista-gastos ul");

//Eventos
eventListeners();
function eventListeners() {
  formulario.addEventListener("submit", agregarGasto);
}

//Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
}

//Clase de interfaz maneja todo lo relacionado al HTML
class UI {
  //Inserta el presupuesto cuando el usuario agrega una cantidad
  insertarPresupuesto(cantidad) {
    //Extraer el valor
    const { presupuesto, restante } = cantidad;

    //Añadir al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    //Crear el div
    const divMensaje = document.createElement("div");

    if (tipo === "error") {
      divMensaje.classList.add("error");
    } else {
      divMensaje.classList.add("correcto");
    }
    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Insertar en el HTML
    document.querySelector(".contenido").insertBefore(divMensaje, formulario);
  }
}

//Instancias
const ui = new UI();
let presupuesto;

//Funciones
//Añade el prespuesto ingresado por el usuario
function agregarPresupuesto() {
  const prespuestoUsuario = document.querySelector("#presupuesto").value;

  //Validar el presupuesto
  if (prespuestoUsuario === "" || prespuestoUsuario <= 0) {
    console.log("Presupuesto no valido");
    return;
  }

  //Presupuesto valido
  presupuesto = new Presupuesto(prespuestoUsuario);
  console.log(presupuesto);

  //Inyectar en el HTML
  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();
  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto-usuario").value;
  const cantidad = document.querySelector("#cantidad-usuario").value;

  //Validacion de datos
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  }
}
