import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
// import Product from '../components/Product';


export default function ProductScreen(props) {

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();
    }, []);

    const [qty, setQty] = useState(1);
   const productId = props.match.params.id;
    const product = products.find((x) => x._id === productId);
    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    if(!product){
        return <div> Product Not Fond </div>;
    };
   
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top" >
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} ></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li> 
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>Price : $ {product.price}</li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price" >${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row" >
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>

                            {
                                product.countInStock > 0 && (
                                    <>
                                  <li>
                                      <div className="row">
                                            <div>Qte</div>
                                            <div>
                                                <select  value={qty} 
                                                         onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(
                                                            (x) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                      </div>
                                  </li>

                                     <li>
                                    <button onClick={addToCartHandler}
                                            className="primary block" >Add to Cart</button>
                                    </li>
                                    </> 
                                   
                                )
                            }

                      
                        </ul>
                    </div>
                </div>
            </div>

            {/* <section class="section featured">
                <div class="top container">
                    <h1>Related Products</h1>
                </div>
                <div class="product-center container">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            </section> */}
        </div>

    )
}
