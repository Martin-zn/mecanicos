import products from "../data/data.json"

//funciuon encargada de obtener todos los productos
export async function fetchAllProducts(){
    return products;
}

export async function fetchProduct(path) {
    console.log("Renderizando el path desde el service: ", path);
    const product = products.catalogue.children.find((prod) => prod.path === path);
    return product;
}