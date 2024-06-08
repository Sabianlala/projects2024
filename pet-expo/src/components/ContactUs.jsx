import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
    lat: 41.3265,
    lng: 19.8159  
  }

  const handleClick = () => {
    setMarkerPosition(marker);
  };

  return (
    <div>
      <Navbar />
      <button className="btn btn-primary btn-lg d-flex justify-content-center m-auto mt-3" onClick={handleClick}>Get Our address</button>
      <h1 className='d-flex justify-content-center m-auto mt-2 mb-2'>Email address :<a href="" className='text-decoration-none'>&nbsp; petexpo1@gmail.com</a></h1>
      <div className="d-flex justify-content-center mb-4 mt-4">
        <LoadScript googleMapsApiKey="AIzaSyD5LcaSn2oXQ0ua4R_K-iAp1qe6MOTsy3M">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            {markerPosition && <Marker position={markerPosition} animation="DROP" />}
          </GoogleMap>
        </LoadScript>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
