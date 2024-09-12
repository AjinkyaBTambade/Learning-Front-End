
class ProductService {
    constructor() {
        this.products = [];
    }

    getAll() {
        return this.products;
    }

    create(product) {
        this.products.push(product);
        console.log("Product created: ", product);
    }

    update(product) {
        const productIndex = this.products.findIndex(p => p.id === product.id);
        if (productIndex === -1) {
            console.log("Product not found with id " + product.id);
            return null;
        }
        this.products[productIndex] = product;
        console.log("Product updated: ", product);
        return product;
    }
    
    remove(productId) {
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            console.log("Product not found with id " + productId);
            return null;
        }
        const deletedProduct = this.products.splice(productIndex, 1)[0];
        console.log("Product removed: ", deletedProduct);
        return deletedProduct;
    }

  
}

let productService = new ProductService();

function getFormData() {
    let id = parseInt(document.getElementById('id').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let unitprice = parseFloat(document.getElementById('unitprice').value);
    let stockavailable = parseInt(document.getElementById('stockavailable').value);

    return {
        id: id,
        title: title,
        description: description,
        unitprice: unitprice,
        stockavailable: stockavailable
    };
}


function insertFlower() {
    let product = getFormData();
    productService.create(product);
}


function showAllData() {
    console.log("All Products: ", productService.getAll());
}


// Update data (update product)
function updateFlower() {
    let product = getFormData();
    productService.update(product);
}

// Remove data (remove product)
function removeFlower() {
    let productId = parseInt(document.getElementById('id').value);
    productService.remove(productId);
}
