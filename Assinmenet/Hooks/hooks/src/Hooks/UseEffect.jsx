import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [data,setdata]=useState(null)
    const[Lodaing,setlodaing]=useState(true)

    useEffect(()=>{
        const fachdata =async()=>{
            try {
                const res =await axios.get(`https://api.example.com/data`);
                setdata(res.data)
                setlodaing(false);
                
            } catch (error) {
                console.log(error.api)
            }
        }
    })
    return (
    <div>

      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    
    </div>
  )
}

export default UseEffect
