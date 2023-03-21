import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

export const EditProduct = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const { title, price, description } = res.data;
                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleProductUpdate = (e) => {
        e.preventDefault();

        const data = {
            title,
            price,
            description
        };

        axios
            .put(`http://localhost:8000/api/products/${id}`, data)
            .then((res) => {
                console.log(res);
                navigate(`/products/${id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">Edit Destination</h3>

            <form
                onSubmit={(event) => {
                    handleProductUpdate(event);
                }}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    <input
                        value={price}
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                        type="number"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    <input
                        value={description}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
            </form>
        </div>
    )
};
