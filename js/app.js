//Variables y selectores
const formulario = document.querySelector("#formulario");
const gastolistado = document.querySelector("#lista-gastos ul");
const gastosDiv = document.querySelector(".gastos");
const errorPresupuesto = document.querySelector(".error-presupuesto");
const errorGasto = document.querySelector(".error-gasto");

//Eventos

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
    //Añade el mensaje de error dependiendo del tipo
    if (tipo === "error-presupuesto") {
      errorPresupuesto.innerHTML = mensaje;
      errorPresupuesto.style.display = "block";
    }
    if (tipo === "error-gasto") {
      errorGasto.innerHTML = mensaje;
      errorGasto.style.display = "block";
    }
    //Quitar el mensaje de alerta
    setTimeout(() => {
      errorPresupuesto.style.display = "none";
      errorGasto.style.display = "none";
    }, 3000);
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
    ui.imprimirAlerta("Presupuesto no valido", "error-presupuesto");
    return;
  }
  //Presupuesto valido
  presupuesto = new Presupuesto(prespuestoUsuario);
  console.log(presupuesto);
  //Inyectar en el HTML
  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto() {
  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto-usuario").value;
  const cantidad = document.querySelector("#cantidad-usuario").value;
  //Validacion de datos
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error-gasto");
    return;
  } else if (cantidad <= 0) {
    ui.imprimirAlerta("Cantidad no valida", "error-gasto");
    return;
  }
}
