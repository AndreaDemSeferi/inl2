// const Activity = ({ data }) => {
//   return (
//     <div>
//       {data.map((trip) => {
//         return <p> {trip.activity}</p>;
//       })}
       
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import React from "react"
 
const Activity= () =>{
    const [data, setData] = useState({});
    // const [url, setUrl] = useState("http://www.boredapi.com/api/activity/?participants=2");
    // const [rl, setrl] = useState("http://www.boredapi.com/api/activity/?participants=4");
    const [participants, setParticipants] = useState("");
    
    const [random, setRandom] = useState("");
    
    useEffect(() => {
      fetch("http://www.boredapi.com/api/activity/?participants="+participants)
        .then((response) => response.json())
        .then((json) => setData(json));
       
    setParticipants()
  },[participants]);
  let randomPart = () => {
    fetch("http://www.boredapi.com/api/activity") //Data som har participants 1
      .then((response) => response.json())
      .then((json) => setData(json));
    setRandom(random + 1);
  };


return(
    <div>
      
    <p>
   <button className="on" onClick={randomPart}>Get random activity</button>
      {data && (<div>Activity:{data.activity}</div>)}   
      {data && (<div>Type:{data.type}</div>)}   
      {data && (<div>participants:{data.participants}</div>)}   
    </p>
      {data && <button onClick={()=> setParticipants(4)}>Get 4 participants</button>}
      <button onClick={()=> setParticipants(2)}>Get 2 participants</button>
      <button onClick={()=> setParticipants(1)}>Get 1 participant</button>
      </div>
);
}
export default Activity;
// const Counter  

//     const[count,setCount] = React.useState(["0"]);

// const handleIncrement = () => {
//     setCount(count+1);
// };
// };   // <>
    // <p>Your count is: {count}</p>
    // <button onClick={handleIncrement}>Increment</button>
    // <button>dec</button>
    // </>