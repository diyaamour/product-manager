import { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

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
            <div className="shadow mb-4 rounded border p-4">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>${price}</p>
                <button onClick={handleDelete}
                    className="btn btn-sm btn-outline-danger mx-1"
                >
                    Delete
                </button>
            </div>
        </div>
    )
};
