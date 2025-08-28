let products = [
  {
    id: "1",
    name: "Product One",
    description: "This is the first product",
    price: 49.99,
  },
  {
    id: "2",
    name: "Product Two",
    description: "This is the second product",
    price: 79.99,
  },
  {
    id: "3",
    name: "Product Three",
    description: "This is the third product",
    price: 99.99,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function addProduct(product) {
  products.push(product);
}
