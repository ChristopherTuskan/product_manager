import { useState } from "react";
import ProductFrom from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div className='col-3 mx-auto'>
            <h1 className='text-center m-3'>Product Manager</h1>
            <ProductFrom products={products} setProducts={setProducts}/>
            <hr/>
            <h2 className='text-center m-3'>All Products:</h2>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )

}

export default Main;