const servicios = []

function cargoServicios() {
    servicios.push(( 103, "REDACCION DE ARTICULOS TECNICOS", 5.00))
    servicios.push(( 102, "COORDINACION DE DIPLOMATURAS TECH 4.0", 350.00))
    servicios.push(( 105, "PROFE JAVASCRIPT", 15.00))
    servicios.push(( 101, "PROFE BACKEND CON NODE JS", 11.00))
    servicios.push(( 104, "PROFE JAVASCRIPT AVANZADO", 10.00))
    servicios.push(( 100, "PROFE VUE JS", 15.00))
    servicios.push(( 106, "PROFE BB.DD SQL", 15.00))
    
}

cargoServicios()

//const nuevosServicios = ["contenidista de cursos tecnicos", "profesor"]

function cargoArrayObj() {
    servicios.push(new Servicio( 103, "redaccion de articulos tecnicos", 5.00))
    servicios.push(new Servicio( 102, "coordinador de diplomaturas", 350.00))
    servicios.push(new Servicio( 105, "profe javascript", 15.00))
    servicios.push(new Servicio( 101, "profe backend con js", 11.00))
    servicios.push(new Servicio( 104, "profe bb.dd. sql", 8.00))
    servicios.push(new Servicio( 100, "profe javascript avanzado", 15.00))
    servicios.push(new Servicio( 106, "profe vue js", 15.00))
    //servicios.push((""))
}
cargoArrayObj()


carrito1 = [{codigo: 101, descripcion: "portaretrato 20 x 30 NYC", precio: 155.00},
            {codigo: 108, descripcion: "portaretrato 50 x 80 NYC", precio: 275.00},
            {codigo: 122, descripcion: "reloj antiguo de pared - holmes", precio: 1125.00},]

carrito2 = [{codigo: 2101, descripcion: "rutini gran malbec", unidades: 3, precio: 1155.00},
            {codigo: 2101, descripcion: "trumpeter reserver", unidades: 2, precio: 1275.00},
            {codigo: 2101, descripcion: "rutini gewurztraminer", unidades: 6, precio: 1550.00},]