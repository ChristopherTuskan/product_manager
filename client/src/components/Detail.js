import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => {
            console.log(id);
            // console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const deleteHandler = () => {
        axios.delete("http://localhost:8000/api/product/destroy/" + id)
            .then(res => {
                console.log(id);
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='col-6 mx-auto'>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Detail;