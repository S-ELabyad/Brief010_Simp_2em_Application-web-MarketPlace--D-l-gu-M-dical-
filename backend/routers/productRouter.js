import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();


// Get All Product
productRouter.get('/', expressAsyncHandler(async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
}));

// Send Product
productRouter.get('/send', expressAsyncHandler(async (req, res) =>{
    // await Product.remove({});
    const createProducts = await Product.insertMany(data.products);
    res.send({createProducts});
}));

// Get a Specific Product 
productRouter.get('/:id', expressAsyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else{
        res.status(404).send({message: 'Product Not Found'});
    }
}));


export default productRouter;