
import './app.css';
import { useState } from "react";

function Mouse() {

  const [event, setEvent] = useState("Mousing Event");


// for bmw logo
  
  const onclick1 = () => {
    alert("BMW Logo Clicked");
  }

  
  const onmouseout1 = () => {
    setEvent("Mouse Moved after Clicking BMW logo");
  }

  
// for Audi logo

  const onclick2 = () => {
    alert("Audi Logo Clicked");
  }

  
  const onmouseout2 = () => {
    setEvent("Mouse Moved after Clicking Audi logo");
  }

  // for benz logo
  const onclick3 = () => {
    alert("Mercedes-Benz Logo Clicked");
  }

  
  const onmouseout3 = () => {
    setEvent("Mouse Moved after Clicking Benz logo");
  }

  return (
    <div className="Mouse">
     <p><span>M</span>ousing <span>E</span>vent</p>
     <h2><span>{event}</span></h2>
     <br></br>
    
      <div id='image1'>
        <img src="bmw1.png" style ={{height:"280px", backgroundColor:"white", padding:"5px 45px",borderRadius:"150px" }} onClick={onclick1}  onMouseOut={onmouseout1}></img>
      </div> 
      <div id='image2'>
        <img src="audi.jpeg" style ={{height:"280px", borderRadius:"150px"}} onClick={onclick2} onMouseOut={onmouseout2}/>
      </div>
      <div id='image3'>
        <img src="benz.jpeg" style ={{height:"280px" , borderRadius:"150px"}} onClick={onclick3} onMouseOut={onmouseout3}/>
      </div>
    </div>
  );
}

export default Mouse;
