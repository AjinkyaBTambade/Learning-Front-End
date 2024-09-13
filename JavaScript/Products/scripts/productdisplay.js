
const displayAllProducts = (products) => {
    let lstProducts = document.getElementById("list");

    
    if (lstProducts.hasChildNodes()) {
        while (lstProducts.firstChild) {
            lstProducts.removeChild(lstProducts.firstChild);
        }
    }

    
    products.map((product) => {
        const node = document.createElement("li");
        const textNode = document.createTextNode(`${product.id}: ${product.title} - ${product.description} - ${product.unitprice} - ${product.stockavailable}`);
        node.appendChild(textNode);
        lstProducts.appendChild(node);
    });

   
    let pItem = JSON.stringify(products);
    localStorage.setItem("products", pItem);
};

const displayProduct = (product) => {
    document.getElementById('id').value = product.id;
    document.getElementById('title').value = product.title;
    document.getElementById('description').value = product.description;
    document.getElementById('unitprice').value = product.unitprice;
    document.getElementById('stockavailable').value = product.stockavailable;
};
