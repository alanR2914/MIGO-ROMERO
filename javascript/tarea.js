function listarServicios() {
    console.clear()
    console.table(servicios)
}

function agregarServicio() {
    let ns = prompt("Ingresa el nuevo servicio a brindar:")
    if (ns != undefined && ns != null && ns.trim() !== "") {
        servicios.push(ns)
        listarServicios()
    }

}

function quitarServicio() {
    let qs = prompt("ingresa el servicio a eliminar")
    let indice = servicios.indexOf(qs)
    servicios.splice(indice, 1)
}

function buscarServicio() {
    const aBuscar = prompt("Ingrese el servicio a buscar:")
    const respuesta = servicios.find( servicio => servicio.codigo === parseInt(aBuscar))
        if (respuesta != undefined) {
            console.table(respuesta)       
        }
     
}
function filtrarServicios() {
    debugger
    const aBuscar = prompt("Ingrese el filtro:")
    const respuesta = servicios.filter( servicio => servicio.descripcion.includes(aBuscar))
        if (respuesta != undefined) {
            console.table(respuesta)       
        }
}
function existeServicio () {
    debugger
    const aBuscar = prompt("Ingrese el servicio")
    const respuesta = servicios.some( servicio => servicio.codigo == aBuscar)       
            console.table(respuesta)               
}

function convertiMinusculas() {
    debugger
   let resultado = servicios.map(servicio => {
                                    return {
                                        codigo: servicio.codigo,
                                        descripcion: servicio.descripcion.toLoweCase(),
                                        precio: servicio.precio
                                    }
                                })
    
}

function calcularTotal() {
    //debugger
    const total = carrito2.reduce((acc, producto) => acc + (producto.unidades * producto.precio), 0)
    console.log("total del carrito:", total)
}

function ordenarServicios() {
    debugger
    servicios.sort((a, b)=> {
        if (a.descripcion > b.descripcion) {
            return 1
        }
        if (a.descripcion < b.descripcion) {
            return -1            
        }
        return 0
        
    })
    console.table(servicios)
}
