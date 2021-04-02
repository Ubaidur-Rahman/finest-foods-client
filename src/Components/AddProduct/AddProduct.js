import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = 'https://stark-fortress-17749.herokuapp.com/addProduct'

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('response', res))


    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd1bcf6f63e1c6e8b6406c8c11ab2fc0f')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container">
        <h2 className="m-5">Add Product</h2>
        <div>

        
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-around p-3">
                    <div>

                        <label>Product Name</label> <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label>Price</label> <br />
                        <input name="price" placeholder="Enter Price" ref={register} />
                        <br />
                    </div>
                    <div>
                        <label>Product Weight</label> <br />
                        <input name="weight" placeholder="Enter Product Weight" ref={register} />
                        <br />
                        <label>Add Photo</label> <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />
                    </div>
                </div>
                <div className="container text-end">
                    <input className="btn btn-warning" type="submit" value="Save" />
                </div>
            </form>
            </div>
            </div>
    );
};

export default AddProduct;