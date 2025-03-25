interface allProductsElement {
    name: string;
    price: number,
    id: number,
    color: string,
    description: string,
    attention: string,
  }
interface products{
    [index: number]: allProductsElement;
}
const allProducts: products = [
    {name: 'Chair', price: 33000, id: 1, color: 'red', description: 'Burgundy-colored chair, made of fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Chair', price: 40000, id: 2, color: 'red', description: 'Chair made of oak.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Sofa', price: 70000, id: 3, color: 'red', description: 'Living room sofa. Fabric, wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Chair', price: 25000, id: 4, color: 'red', description: 'Chair made of fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Armchair', price: 37000, id: 5, color: 'red', description: 'Armchair made of fabric and high-quality metal.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Armchair', price: 50000, id: 6, color: 'red', description: 'Fabric, metal, wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Pouf', price: 15000, id: 7, color: 'red', description: 'Fabric, wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Sofa', price: 60000, id: 8, color: 'red', description: 'Fabric, wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Sofa', price: 65000, id: 9, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Sofa', price: 67999, id: 10, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Armchair', price: 45000, id: 11, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Armchair', price: 40000, id: 12, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Chair', price: 35000, id: 13, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Chair', price: 50000, id: 14, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Chair', price: 43000, id: 15, color: 'red', description: 'Fabric and wood.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
    {name: 'Table', price: 35000, id: 16, color: 'red', description: 'Wood, lacquer.', attention: 'Important! All models presented on the website are renders; each model is handcrafted and made to order!'},
];

export {allProducts}