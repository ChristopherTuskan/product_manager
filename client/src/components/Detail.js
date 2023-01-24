import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </div>
    );
}

export default Detail;