import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [products, setProducts] = useState([])

    function fetchAPI(){
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
    .then(response => response.json())
    .then(data=>setProducts(data))

    }

    async function fetchAxiosAPI(){
    const response =await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
    console.log(response.data)
    setProducts(response.data)
    }

// Get post put/patch delete   httpMethod


    useEffect(()=>{
        // fetchAPI()
        fetchAxiosAPI();
    },[])

  return (
    <div>
        <pre>
        login -- Dashboard 
        with bootstrap 
        </pre>
        {products.length > 0 ? <>
                    {products.map((p,i)=>(
                        <li key={i}>{p.name}</li>
                    ))}
        </>    : <>Products not found</>}
    </div>
  )
}

export default Dashboard
