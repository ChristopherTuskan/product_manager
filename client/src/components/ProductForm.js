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
                setProducts([...products, res.data]);
                setTitle("");
                setPrice("");
                setDesc("");
                console.log(products)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <form className='col-8 mx-auto' onSubmit={onSubmitHandler}>
            <div className='d-flex justify-content-between m-3'>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className='d-flex justify-content-between m-3'>
                <label>Price: </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
            </div>
            <div className='d-flex justify-content-between m-3'>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc}/>
            </div>
            <div className='d-flex justify-content-center m-3'>
                <input type="submit" value="Create"/>
            </div>
        </form>
    );
}

export default ProductForm;