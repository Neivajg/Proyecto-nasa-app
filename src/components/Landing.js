import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer} from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'


import Card from 'react-bootstrap/Card';

//URl Mi api: mirar en render y utilizar la mia
import axios from "axios";


const apiEndpoint = "https://nasa-j6wi.onrender.com/api/astronomy/landings";

const Landing = () => {

  const [landings,setLandings]= useState([])
  const [inputLatitud, setLatitud] = useState ('')
  const [inputLongitud, setLongitud] = useState ('')
  const [searchs,setSearch] = useState({})
  const [inputmass, setMasa] = useState ('')
  const [searchsMass,setSearchMass] = useState({})

  


  async function getLandings() {
    const { data } = await axios.get(apiEndpoint);
    setLandings(data.filter(landing => landing.geolocation),
    );
  }


    useEffect(() => {
      getLandings();
    }, []);
    
    let filters= landings
      if( Object.keys(searchs).length !== 0 ) {
        filters= landings.filter((landing)=>(landing.geolocation.latitude === searchs.lat && landing.geolocation.longitude === searchs.long))
      }if(searchs){
        filters= landings.filter((landing)=>(landing.geolocation.latitude === searchs.lat && landing.geolocation.longitude === searchs.long))
      }if(setSearchMass){
        console.log("entraaa en el else")
        filters= landings.filter((landing)=>(landing.mass === searchsMass ))
      }

    const handlerBusqueda=()=>{
      setSearch({lat: Number(inputLatitud), 
       long:Number(inputLongitud)})   
    }

    const handlerBusquedaMass=()=>{
      setSearchMass(Number(inputmass))
    }

    

  return (
    <>
    <div className="ambos"></div>
    <div className="mapa" >
      <MapContainer style={{height:500,witdh:500}} center={[51.505, -0.09]} zoom={1.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  
        {filters.map((landing,index) => ( 
          <>
          <Marker key={index} position={[landing.geolocation.latitude,landing.geolocation.longitude]}>
          </Marker>

          <Card key={index} style={{ width: '18rem', zIndex: '2000',position:"fixed", background:'transparent' , fontSize:'15px',bottom:50,right:0}}>
          <Card.Body>
            <Card.Title>{landing.name}</Card.Title>
            <Card.Text>
            <p>Mass: {landing.mass}</p>
              <p>Nametype: {landing.nametype}</p>
              <p>Recclass: {landing.recclass}</p>
              <p>Reclong: {landing.reclong}</p>
              <p>Fall: {landing.fall}</p>
              <p>Year: {landing.year} </p>
              <p>Reclat: {landing.reclat} </p>
              <p>Reclong: {landing.reclong}</p>
            </Card.Text>
          </Card.Body>
          </Card>
          </>
          ))
        }

      </MapContainer>
    </div>
     
        <div style={{display:"flex", justifyContent: "center"}} className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Geolocalización por:</span>
          </div>
            <input onChange={(e)=>setLatitud(e.target.value)} type="number" value={inputLatitud.latitude} placeholder="Latitude" aria-label="Username" aria-describedby="basic-addon1">
            </input>
            <input onChange={(e)=>setLongitud(e.target.value)} type="number" value={inputLongitud.longitude} placeholder="Longitude" aria-label="Username" aria-describedby="basic-addon1">
            </input>
          <button type="button" className="btn btn-dark" onClick={handlerBusqueda}>Buscar</button>
          <div className="input-group-prepend">
            <span className="input-group-text"  id="basic-addon1">Geolocalización por:</span>
          </div>
          <input onChange={(e)=>setMasa(e.target.value)} type="number" value={inputmass} placeholder="Mass" aria-label="Username" aria-describedby="basic-addon1">
            </input>
            <button type="button" className="btn btn-dark" onClick={handlerBusquedaMass}>Buscar</button>
        </div>
          </>
  );
};

export default Landing

