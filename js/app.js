//Variables y selectores
const formulario = document.querySelector("#formulario");
const gastolistado = document.querySelector("#lista-gastos ul");

//Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    //Extraer el valor
    const { presupuesto, restante } = cantidad;

    //Añadir al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
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
