import React, { useEffect, useState } from 'react'

function Aipdata() {

    const[Data,usedata]=useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        const fecthdata= async()=>{
            try {
                const response=await fetch(apiUrl)  
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                usedata(result); 
            } catch (error) {
                setError(error.message)
                
            }
            finally {
                setLoading(false);
              }
      
        }
        fecthdata()
    }

    )

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
       <h1>Fetched Data</h1>
      <ul>
        {Data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Aipdata
