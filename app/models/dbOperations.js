const ProdModel = require('./Product.js');

let product = {}

//Insert a single product

product.addProduct = (productObj) => {
    return ProdModel.create(productObj).then((insertedData) => {
        if (insertedData) {
            return insertedData;
        }
        else {
            let err = new Error("Data not inserted")
            err.status = 500
            throw err;
        }
    })
}

//Retrieve all data
product.find = () => {
    return product.find({}).then((productData) => {
        console.log(productData);
        res.send(productData);
        if (!productData || productData.length == 0) { return productData }
        else {
            let err = new Error("No record found");
            err.status = 404;
            throw err;
        }
    });

}

module.exports = product;

