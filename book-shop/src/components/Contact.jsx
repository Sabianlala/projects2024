import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const ContactUs = () => {

  const [markerPosition, setMarkerPosition] = useState(null);

  const containerStyle = {
    width: '80%',
    height: '600px',
  };

  const center = {
    lat: 41.3275,
    lng: 19.8187  
  };

  const marker = {
    lat: 41.3188,
    lng: 19.8133 
  }

  const handleClick = () => {
    setMarkerPosition(marker);
  };

  return (
    <div>
      <button className="btn btn-primary btn-lg d-flex justify-content-center m-auto mt-3" onClick={handleClick}>Get Our address</button>
      <h1 className='d-flex justify-content-center m-auto mt-2 mb-2'>Email address :<a href="" className='text-decoration-none'>&nbsp; bookshop1@gmail.com</a></h1>
      <div className="d-flex justify-content-center mb-4 mt-4">
        <LoadScript googleMapsApiKey="AIzaSyD5LcaSn2oXQ0ua4R_K-iAp1qe6MOTsy3M">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            {markerPosition && <Marker position={markerPosition} animation={'bounce'} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default ContactUs;