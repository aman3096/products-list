var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ProductDB", { useNewUrlParser: true })
mongoose.set('useCreateIndex', false);
var ProductSchema = mongoose.Schema({
    ProdName: String,
    ImageURL: String,
    Desc: String,
    Price: Number
}, { collection: 'products' });
var Product = mongoose.model('product', ProductSchema);
module.exports = Product;

