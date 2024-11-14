let electrodomesticos = ["heladera","microonda","televisor","freidora","aspiradora","licuadora"];
//console.log(electrodomesticos[0]);
//console.log(electrodomesticos[2]);
//console.log(electrodomesticos[3]);
//console.log(electrodomesticos[5]);

const elementoCero = electrodomesticos.shift(); 
electrodomesticos.push(elementoCero);
//console.log(electrodomesticos); 

electrodomesticos.push("lavarropa", "cocina");
// console.log(electrodomesticos);

function buscadorDeProductos(producto) {
    if (electrodomesticos.includes(producto)) {
      console.log("Producto encontrado");
    } else {
      console.log("El producto buscado no existe");
    }
  }

 // buscadorDeProductos("horno")

  const unificarArray = electrodomesticos.join (" ");
// console.log(unificarArray);
  
  const cantidadProductos = unificarArray.split(" ").length;
// console.log("Cantidad de palabras:", cantidadProductos);

let productos = unificarArray.replace("microonda", "procesadora");
// console.log(productos);

let arrayProductos = productos.split(" ");
console.log(arrayProductos);
