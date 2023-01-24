import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            // console.log(res.data);
            setProducts(res.data);
            console.log(products);
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
                        <div key={index}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                )})
            }
        </div>
    );
}

export default ProductList;