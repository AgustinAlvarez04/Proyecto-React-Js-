const Productos = [
    {id: "1", name:"Juan", precio: 200, img: "http://placekitten.com/200/300", descripcion:"Amigable", category: "gaticos"},
    {id: "2", name:"Pedro", precio: 300, img: "http://placekitten.com/g/200/300", descripcion:"Bonico", category: "gaticos"},
    {id: "3", name:"Anibal", precio: 400, img: "https://place.dog/300/200", descripcion:"Hola", category: "perritos"},
    {id: "4", name:"Jose", precio: 500, img: "https://place.dog/300/200", descripcion:"Pancho", category: "perritos"},
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(Productos);
        }, 500)
    })
}

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos.find((prod) => prod.id === productoId));
      }, 500);
    });
  };

export const getProductosCategory= (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(Productos.filter(prod => prod.category === categoryId));
        }, 500)
    })
}

