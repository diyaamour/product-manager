import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { AddProduct } from "../components/AddProduct";

export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [deletedProductId, setDeletedProductId] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [deletedProductId]);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                // const filteredProducts = products.filter((product) => product.id !== id);
                // setProducts(filteredProducts);
                setDeletedProductId(id);
            })
            .catch((err) => {
                console.log(err);
            });
        };

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

        return (
            
            <div className="w-50 mx-auto text-center">
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
                    <h1>Product Manager</h1>
                </nav>
                <AddProduct addProduct = {addProduct}/>
                <hr />
                <h1>All Products</h1>

                {products.map((product) => {
                    const { _id, title, description, price } = product;

                    return (
                        <div key={_id} className="shadow mb-4 rounded border p-4">
                            <h2>
                                <Link to={`/products/${_id}`}>{title}</Link>
                            </h2>
                            <p>${price}</p>
                            <p>{description}</p>

                            <div>
                                <button onClick={(event) => deleteProduct(_id)}
                                className="btn btn-sm btn-outline-danger mx-1"
                                >
                                    Delete
                                </button>
                                <Link to={`/products/${_id}/edit`} className="btn btn-sm btn-outline-primary mx-1">Edit</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
