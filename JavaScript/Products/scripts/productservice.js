class ProductService {
    constructor() {
        this.products = [];
    }

    getAll() {
        return this.products;
    }

    getById(productId) {
        return this.products.find(p => p.id === productId);
    }

    create(product) {
        this.products.push(product);
    }

    update(product) {
        const productIndex = this.products.findIndex(p => p.id === product.id);
        if (productIndex === -1) {
            console.log("Product not found with id " + product.id);
            return null;
        }
        this.products[productIndex] = product;
        return product;
    }

    remove(productId) {
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            console.log("Product not found with id " + productId);
            return null;
        }
        this.products.splice(productIndex, 1);
    }
}
