import React, { useState } from "react";
import "./App.css";
function App() {
   const[lat,setLat] = useState(30.316496);
   const[long,setLong] = useState(78.032188);
   const[search,setSearch] = useState(false);
   const[loading,setloading] = useState();
   function getLocation(){
      setloading("loading.....");
      if(navigator.geolocation){
         setSearch(true);
         navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLat(latitude);
            setLong(longitude);
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            setloading();
    },(error)=>{
      alert(error.message);
    });
    }
   }
  return (
    <>
      <div className="google-map-code">
        <div className="relative">
         <div className="onclick_eventhandle">
         <h2>Show your location in map </h2>
          <h3>allow your location to fetch the data of your device.</h3>
          <br/>
          <p>just click on the button and see your actual  position  </p>
          <button className="btnLocation" onClick={getLocation}>Get your location</button>
         </div>
        </div>
        
        <div className="show_map">
        {search?(!loading?<iframe
            name={"gMap"}
            src={`https://www.google.com/maps/embed/v1/place?q=${lat} 
              , ${long}&key=${"AIzaSyBvs7st9FW7Kta8uUNdsFiygTO1UkVjNfg"}`}
          ></iframe>:loading):<div><h2>click and allow your location so you can see your location</h2></div>}
        </div>
      </div>
    </>
  );
}
export default App;
