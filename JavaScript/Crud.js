
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