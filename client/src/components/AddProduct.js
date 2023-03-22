import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AddProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }

        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then((res) => {
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
                props.addProduct(res.data);
                // navigate("/products");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            });
    }

    return (
        <div className="w-55 p-4 rounded mx-auto shadow">
            <h3 className="text-center">
                Add a new product
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6 ">Title 📑</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Price 🏷️</label>
                    <input onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                        type="number"
                        className="form-control"
                        value={price}
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Description 💬</label>
                    <input onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={description}
                    />
                </div>
                <button className="btn btn-sm btn-outline-success mt-2">Add Product ➕</button>
            </form>
        </div>
    )
}