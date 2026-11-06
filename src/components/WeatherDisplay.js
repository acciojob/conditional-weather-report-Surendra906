import React from'react';
 function WeatherDisplay({weather}){
   const {temparature,conditions}=weather;
   const tempColor=temerature>20?'red':'blue';
   return(
     <div>
     <p>
     Temperature: <span style={{color:tempColor}}>{temperature}</span>
   </p>
<p>Conditions :{conditions}</p>
   </div>
);
}

export default WeatherDisplay;
