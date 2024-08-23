import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProducCard'
import { Grid } from '@mui/material'

const AddCart = () => {
    const [cart,setCart] = useState([])

    const carts= async () => {
        const response= await axios.get("https://fakestoreapi.in/api/products")
       
        setCart(response.data.products);
    }

    useEffect(()=>{
        carts()
    },[])

   console.log(cart)
  return (
    <div>
        <Grid container spacing={2} sx={{
          
        }}>
            {
                cart.map((cart)=><>
                <Grid xs={12} sm={6} md={3}
                    
                >
                <ProductCard cart={cart}/>
                </Grid>
                </>
            )
            }</Grid>
    
    </div>
  )
}

export default AddCart