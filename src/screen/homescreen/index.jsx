import React, { Component, useState, useEffect } from "react";   
import './style.css'
import Axios from "axios";

const Homescreen = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        getProducts()
    },[])

   const getProducts = async() => {
        const result = await Axios.get('https://dummyjson.com/products')
        console.log('result', result.data.products);
        setData(result.data.products)
   }
  
    return (
        <div style={{display: "flex", flexWrap: 'wrap', gap: "5vw", alignItems: 'center', marginTop: '5vw'}}>
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index}>
                                <img style={{width: '15vw',height: '7.5vw', objectFit: 'cover'}} src={item.thumbnail} alt="" />
                            <p  >{item.title}</p>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Homescreen;