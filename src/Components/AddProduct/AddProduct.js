import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
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
        .then( res => console.log('response', res))
        

    };

    const handleImageUpload = event =>{
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
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Product Name" ref={register} />
                <br/>
                <input name="price" placeholder="Price" ref={register} />
                <br/>
                <input name="weight" placeholder="Product Weight" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default AddProduct;