import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProducCard';
import { Grid } from '@mui/material';
import AddCart from './AddCart';
const Api = () => {
const [data,setdata]=useState([]);

  const fetchApi =async ()=>{
   const products=await axios.get("https://fakestoreapi.com/products")
   
   setdata(products.data)
   
    
  }
    useEffect(()=>{
       fetchApi() 
    },[])
    console.log(data)
  return (
    <div>
        <Grid container spacing={2}>
            {
                data.map((data)=><>
                <Grid xs={12} sm={6} md={3}>
                <ProductCard data={data}/>
                </Grid>
                </>
            )
            }
            
            </Grid> 
          
    </div>
  )
}

export default Api