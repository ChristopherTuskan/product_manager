import { useState } from "react";
import ProductFrom from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductFrom products={products} setProducts={setProducts}/>
            <hr/>
            <h2>All Products:</h2>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )

}

export default Main;