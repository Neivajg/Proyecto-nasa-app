import React, { useState, useEffect } from 'react'
import css from '../csscomponents/neas.css'


import axios from "axios";

const Neas = () => {
  const apiEndpoint = "https://nasa-j6wi.onrender.com/api/astronomy/neas";

  const [neas, setNeas] = useState([])

  async function getNeas() {
    const { data } = await axios.get(apiEndpoint);

    setNeas(data)
  }
  useEffect(() => {

    getNeas()
  }, [])

  const onDelete=(_id)=>{
  const filtro= neas.filter(elem => elem._id !== _id)
  setNeas(filtro)    
}

  return (
    <>
      <div className='cards' >

        {neas.map((e,index) => (  
          <div Key={index} className="container">
           <div className="row">
            <div className="col">
            <h1 className='titulo'>{e.orbit_class}</h1>
              <p>Designation: {e.designation}</p>
              <p>Date: {e.discovery_date}</p>
              <p > {e.h_mag} </p>
              <p > {e.moid_au} </p>
              {/* <p > {e.q_au_1}</p>
              <p > {e.q_au_2}</p> */}
              {/* <p > {e.period_yr}</p> */}
              <p > {e.i_deg}</p>
              {/* <p > {e.pha}</p> */}
              </div>
              <button className='boton' onClick={()=>{onDelete(e._id)}}>Delete</button>
              </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Neas