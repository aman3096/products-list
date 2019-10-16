var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ProductDB", { useNewUrlParser: true })
mongoose.set('useCreateIndex', true);

var ProductSchema = mongoose.Schema({
    ProdName: String,
    ImageURL: String,
    Desc: String,
    Price: Number
}, { collection: 'products' });


var Product = mongoose.model('Product', ProductSchema);

Product.getProducts = function (callback) {
    Product.find(callback);
}

module.exports = Product;