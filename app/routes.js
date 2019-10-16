var Product = require('./models/Product.js');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send('Heelo');
    });
    app.get('/api/products', function (req, res) {

        Product.getProducts(function (err, products) {
            if (err) {
                throw err;
            }
            res.json(products);
        });
    });

    app.get('/getProducts', (req, res) => {

        Product.getProducts(function (err, products) {
            if (err) {
                throw err;
            }
            res.json(products);
        });
    });

    app.get('/addProducts/:ProdName/:ImageURL/:Desc/:Price', (req, res) => {
        var newProd = new Product();
        newProd.ProdName = req.params.ProdName;
        newProd.ImageURL = req.params.ImageURL;
        newProd.Desc = req.params.Desc;
        newProd.Price = req.params.Price;


        console.log("ProdName " + newProd.ProdName);
        console.log("ImageURL " + newProd.ImageURL);
        console.log("Desc " + newProd.Desc);
        console.log("Price " + newProd.Price);

        newProd.save((err) => {
            if (err) {
                throw err;
            }
        });
        res.send("Successfully added");
    });

    app.post('/AddProduct', jsonParser, (req, res) => {
        var newProd1 = new Product();
        newProd1.ProdName = req.body.ProdName;
        newProd1.ImageURL = req.body.ImageURL;
        newProd1.Desc = req.body.Desc;
        newProd1.Price = req.body.Price;

        console.log("ProdName " + newProd1.ProdName);
        console.log("ImageURL " + newProd1.ImageURL);
        console.log("Desc " + newProd1.Desc);
        console.log("Price " + newProd1.Price);

        newProd1.save((err) => {
            if (err) {
                throw err;
            }
        });
        res.json({ "message": "Hello World from POST!" + req.body.ProdName });

    });

}


