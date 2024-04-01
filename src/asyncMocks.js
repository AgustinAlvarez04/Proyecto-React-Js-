const Productos = [
    {id: "1", name:"Juan", precio: 200, stock: 5, img: "https://place.dog/300/300", descripcion:"Amigable", category: "gaticos"},
    {id: "2", name:"Pedro", precio: 300, stock: 5, img: "https://place.dog/200/300", descripcion:"Bonico", category: "gaticos"},
    {id: "3", name:"Anibal", precio: 400, stock: 5, img: "https://place.dog/200/200", descripcion:"Hola", category: "perritos"},
    {id: "4", name:"Jose", precio: 500, stock: 5, img: "https://place.dog/200/400", descripcion:"Pancho", category: "perritos"},
    {id: "5", name:"Iphone 12", precio: 600, stock: 5, img: "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg", descripcion: "iphone 12", category: "celus"},
    {id: "6", name:"Samsung", precio: 700, stock: 5, img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803", descripcion: "Samsung", category: "celus"},
    {id: "7", name:"Iphone 13", precio: 800, stock: 5, img: "https://http2.mlstatic.com/D_NQ_NP_779617-MLA71782867320_092023-O.webp", descripcion: "iphone 13", category: "celus"},

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

