//event handlers

let prdSvc=new ProductService();

const onShowAll=()=>{
    console.log("Showing All The Data");
    let products= prdSvc.getAll();
    displayAllProducts(products);
};

const onInsert=()=>{
    console.log("Data After Insertion");
    let product=acceptProductFromUI();
    prdSvc.create(product);

    let products= prdSvc.getAll();
    displayAllProducts(products);
};

const onUpdate=()=>{
    console.log("Data After Update");
    let product = acceptProductFromUI();
    prdSvc.update(product);
    console.log(prdSvc.getAll());

    let products= prdSvc.getAll();
    displayAllProducts(products);
}

const onRemove=()=>{
    console.log("Data After Remove");
    let product = acceptProductFromUI();
    let productId = parseInt(document.getElementById('id').value);
    prdSvc.remove(productId);
    console.log(prdSvc.getAll());

    let products= prdSvc.getAll();
    displayAllProducts(products);
};