// Carrito
// #1 BASE DE DATOS
// const db = [
//   {
//     id: 1,
//     nombre: 'Hamburguesa',
//     descripcion: 'Hamburguesa de carne de res',
//     precio: 18.00,
//     imagen: './assets/img/hamburger.png',
//     categoria: 'aperitivos',
//     cantidad: 10
//   },
//   {
//     id: 2,
//     nombre: 'Papas Fritas',
//     descripcion: 'Papas fritas de tamaño mediano',
//     precio: 12.00,
//     imagen: './assets/img/french-fries.png',
//     categoria: 'aperitivos',
//     cantidad: 15
//   },
//   {
//     id: 3,
//     nombre: 'Hot-Dog',
//     descripcion: 'Hot-Dog de tamaño mediano',
//     precio: 16.00,
//     imagen: './assets/img/hot_dog.png',
//     categoria: 'aperitivos',
//     cantidad: 13
//   },
//   {
//     id: 4,
//     nombre: 'Sandwich',
//     descripcion: 'Sandwich de jamón y queso',
//     precio: 15.00,
//     imagen: './assets/img/sandwich.png',
//     categoria: 'aperitivos',
//     cantidad: 16
//   },
//   {
//     id: 5,
//     nombre: 'Donas',
//     descripcion: 'Donas de chocolate',
//     precio: 10.00,
//     imagen: './assets/img/donut.png',
//     categoria: 'aperitivos',
//     cantidad: 24
//   },
//   {
//     id: 6,
//     nombre: 'Nuguets',
//     descripcion: 'Nuggets de pollo',
//     precio: 14.00,
//     imagen: './assets/img/chicken_leg.png',
//     categoria: 'aperitivos',
//     cantidad: 20
//   },
//   {
//     id: 7,
//     nombre: 'Soda Lata',
//     descripcion: 'Soda de 355ml',
//     precio: 13.00,
//     imagen: './assets/img/soda.png',
//     categoria: 'bebidas',
//     cantidad: 14
//   },
//   {
//     id: 8,
//     nombre: 'Soda Vaso',
//     descripcion: 'Soda de 500ml',
//     precio: 15.00,
//     imagen: './assets/img/soda_cup.png',
//     categoria: 'bebidas',
//     cantidad: 18
//   },
//   {
//     id: 9,
//     nombre: 'Jugo',
//     descripcion: 'Jugo de 500ml',
//     precio: 11.00,
//     imagen: './assets/img/glass.png',
//     categoria: 'bebidas',
//     cantidad: 15
//   }
// ]

const db = [
  {
    id: 1,
    nombre: 'Monitor',
    descripcion: 'Monitor Gamming',
    precio: 250.00,
    imagen: './assets/img/Monitor.png',
    categoria: 'Gamming',
    cantidad: 25
  },
  {
    id: 2,
    nombre: 'Play Station 5',
    descripcion: 'Consola Play Station 5',
    precio: 800.00,
    imagen: './assets/img/Playstation.png',
    categoria: 'Gamming',
    cantidad: 15
  },
  {
    id: 3,
    nombre: 'Laptop',
    descripcion: 'Laptop Gamming',
    precio: 750.00,
    imagen: './assets/img/laptop.png',
    categoria: 'Gamming',
    cantidad: 7
  },
  {
    id: 4,
    nombre: 'Silla de Escritorio',
    descripcion: 'Silla de Escritorio Gamming',
    precio: 250.00,
    imagen: './assets/img/silla.png',
    categoria: 'Gamming',
    cantidad: 5
  },
  {
    id: 5,
    nombre: 'Mouse',
    descripcion: 'Mouse Gamming',
    precio: 100.00,
    imagen: './assets/img/mouse.png',
    categoria: 'Gamming',
    cantidad: 100
  },
  {
    id: 6,
    nombre: 'Audifonos',
    descripcion: 'Audifonos Gamming',
    precio: 125.00,
    imagen: './assets/img/audifonos.png',
    categoria: 'Gamming',
    cantidad: 40
  },
  {
    id: 7,
    nombre: 'Teclado',
    descripcion: 'Teclado Gamming',
    precio: 90.00,
    imagen: './assets/img/teclado.png',
    categoria: 'Gamming',
    cantidad: 25
  }
]




// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()