import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data.title);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/" + id, {
            title,
            price,
            desc
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='col-2 mx-auto'>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div className='d-flex justify-content-between m-3'>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className='d-flex justify-content-between m-3'>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div className='d-flex justify-content-between m-3'>
                    <label>Description: </label>
                    <input type="text" name="desc" value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                </div>
                <div className='d-flex justify-content-center m-3'>
                    <input type="submit" value="Update"/>
                </div>
            </form>
        </div>
    )

}

export default Update;