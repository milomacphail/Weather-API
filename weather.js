if (navigator.geolocation) {
            window.onload = function(){
       var currentPosition;
       function getCurrentLocation (position){
           currentPosition =  position;
           latitude = currentPosition.coords.latitude;
           longitude = currentPosition.coords.longitude;
      
       $.getJSON("https://fcc-weather-api.glitch.me//api/current?lon=:longitude&lat=:latitude")
}
};