const displayAllProducts = (products) => {
    let lstProducts = document.getElementById("list");

    // Clear the previous list
    if (lstProducts.hasChildNodes()) {
        while (lstProducts.firstChild) {
            lstProducts.removeChild(lstProducts.firstChild);
        }
    }

    // Display each product in the list
    products.map((product) => {
        const node = document.createElement("li");
        const textNode = document.createTextNode(`${product.id}: ${product.title} - ${product.description} - $${product.unitprice.toFixed(2)} - Quantity Available: ${product.stockavailable}`);
        node.appendChild(textNode);
        lstProducts.appendChild(node);
    });
};

const displayProduct = (product) => {
    document.getElementById('id').value = product.id;
    document.getElementById('title').value = product.title;
    document.getElementById('description').value = product.description;
    document.getElementById('unitprice').value = product.unitprice;
    document.getElementById('stockavailable').value = product.stockavailable;
};
