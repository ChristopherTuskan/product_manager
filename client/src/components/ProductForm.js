import {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res => {
                console.log(products)
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDesc("");
                setProducts([...products, res.data]);
                console.log(products)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc}/>
            </div>
            <input type="submit" value="Create"/>
        </form>
    );
}

export default ProductForm;