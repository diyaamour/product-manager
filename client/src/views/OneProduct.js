import { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate, Link} from "react-router-dom";

export const OneProduct = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                navigate("/products");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (product === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const { _id, title, description, price } = product;

    return (
        <div className="w-50 mx-auto text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
                <h1 ><Link to='/' className="text-decoration-none" style={{color: 'black'}}>Product Manager</Link> </h1>
            </nav>
            <div className="shadow mb-4 rounded border p-4">
                
                <h1>{title}</h1>
                <p>Price: ${price}</p>
                <p>Description: {description}</p>
                
                <button onClick={handleDelete}
                    className="btn btn-sm btn-outline-danger mx-1"
                >
                    Delete
                </button>
            </div>
        </div>
    )
};
