import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/destroy/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            // console.log(res.data);
            setProducts(res.data);
            // console.log(products);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);



    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className='mx-auto col-8 d-flex justify-content-between'>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            <div>
                                <Link className='m-3' to={`/product/update/${product._id}`}>Edit</Link>
                                <button onClick={() => {deleteProduct(product._id)}}>Delete</button>
                            </div>
                        </div>
                )})
            }
        </div>
    );
}

export default ProductList;