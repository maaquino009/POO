// clase destino

class Viaje{
    constructor(nombre, descripcion, precio){
        this.nombre = nombre;
        this.descripcion= descripcion;
        this.precio = precio;
    }


mostrar(){
    return`
        ${this.nombre}: ${this.descripcion} (Q${this.precio}) 
    `;
}
}

// Clase Empleado

class Empleado {
    constructor(nombre, direccion, genero, dpi, puesto, foto){
        this.nombre = nombre;
        this.direccion = direccion;
        this.genero = genero;
        this.dpi = dpi;
        this.puesto = puesto;
        this.foto = foto;
    }


mostrar (){
    return`${this.nombre} - ${this.puesto}
        `;
}
}

class Aerolinea {
    constructor(nombre, descripcion, contacto, logo){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.contacto = contacto;
        this.logo = logo;
    }

mostrar(){
    return`${this.nombre} - ${this.contacto}`;

}


}

const viajes = [
  new Viaje("Antigua", "Ciudad colonial rodeada de volcanes", 150),
  new Viaje("Tikal", "Ruinas mayas en Petén", 300),
  new Viaje("Panajachel", "Lago Atitlán con vistas hermosas", 200),
  new Viaje("Semuc Champey", "Piscinas naturales en Alta Verapaz", 180),
  new Viaje("Quetzaltenango", "Ciudad fría con historia", 160),
  new Viaje("Livingston", "Cultura garífuna y playas", 220),
  new Viaje("Chichicastenango", "Mercado tradicional maya", 120),
  new Viaje("Monterrico", "Playa de arena volcánica", 140),
  new Viaje("Cobán", "Clima fresco y naturaleza", 150),
  new Viaje("Esquipulas", "Basílica del Cristo Negro", 130),
];

const empleados = [
  new Empleado("Juan López", "Zona 1", "M", "123456789", "Guía", ""),
  new Empleado("Ana Rodríguez", "Zona 3", "F", "987654321", "Secretaria", ""),
  new Empleado("Carlos Pérez", "Mixco", "M", "456789123", "Conductor", ""),
  new Empleado("Lucía Hernández", "Villa Nueva", "F", "741258963", "Guía", ""),
  new Empleado("Pedro Ramírez", "Zona 18", "M", "321654987", "Coordinador", ""),
];

const aerolineas = [
  new Aerolinea("TAG Airlines", "Vuelos nacionales", "info@tag.com", ""),
  new Aerolinea("Avianca", "Conexiones internacionales", "contacto@avianca.com", ""),
  new Aerolinea("Copa Airlines", "Rutas a Sudamérica", "servicio@copa.com", ""),
];


//Funcion para cargar datos 

function cargarDatos(){

    const listaViajes = document.getElementById("lista-viajes");
    const listaAerolineas = document.getElementById("lista-aerolineas");
    const listaEmpleados = document.getElementById("lista-empleados");


    if(listaViajes){
        viajes.forEach(viaje =>{
            const li = document.createElement("li");
            li.textContent = viaje.mostrar();
            listaViajes.appendChild(li);
        });

    if (listaAerolineas) {
        aerolineas.forEach(aero => {
        const li = document.createElement("li");
        li.textContent = aero.mostrar();
        listaAerolineas.appendChild(li); // Añade cada aerolínea
    });
  }

  if (listaEmpleados) {
        empleados.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = emp.mostrar();
        listaEmpleados.appendChild(li); // Añade cada empleado
    });
  }

    }

}
document.addEventListener("DOMContentLoaded", () => {
  cargarDatos(); 

  const form = document.getElementById("form-empleado");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      
      const nuevoEmpleado = new Empleado(
        document.getElementById("nombre").value,
        document.getElementById("direccion").value,
        document.getElementById("genero").value,
        document.getElementById("dpi").value,
        document.getElementById("puesto").value,
        document.getElementById("foto").value
      );

      empleados.push(nuevoEmpleado); // Agrega a la lista
      alert("Empleado agregado correctamente.");
      form.reset(); 
    });
  }
});