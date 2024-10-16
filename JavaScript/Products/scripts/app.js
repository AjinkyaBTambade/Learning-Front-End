let svc = new ProductService();

// Load products from sessionStorage on page load
window.onload = () => {
    const storedProducts = JSON.parse(sessionStorage.getItem('products')) || [];
    svc.products = storedProducts; // Populate the service with stored products
    displayAllProducts(storedProducts); // Display them on the page
};

function getFormData() {
    let id = parseInt(document.getElementById('id').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let unitprice = parseFloat(document.getElementById('unitprice').value);
    let stockavailable = parseInt(document.getElementById('stockavailable').value);

    return { id, title, description, unitprice, stockavailable };
}

function insertData() {
    let product = getFormData();
    svc.create(product);
    sessionStorage.setItem('products', JSON.stringify(svc.products)); 
    showAllData();
}

function showAllData() {
    let productS = svc.getAll();
    displayAllProducts(productS);
}

function updateData() {
    let product = getFormData();
    svc.update(product);
    sessionStorage.setItem('products', JSON.stringify(svc.products)); 
    showAllData();
}

function removeData() {
    let productId = parseInt(document.getElementById('deleteId').value);
    svc.remove(productId);
    sessionStorage.setItem('products', JSON.stringify(svc.products)); 
    showAllData();
}

function getById() {
    let productId = parseInt(document.getElementById('getById').value);
    let product = svc.getById(productId);
    if (product) {
        displayProduct(product);
    } else {
        console.log('Product not found');
    }
}
