// import React from "react";
import "./App.css";
// import Code from './Code'
// import { useState, useEffect } from "react";
import Activity from "./Activity";
// import Activity from "./Activity";
// import axios from 'axios'
// import {useState ,useEffect } from "react";
// const employeeInfo= [
//   {
//     firstName:"lola",
//     lastName:"Sef",
//     age:"21"
//   },
//   {
//     firstName:"rola",
//     lastName:"def",
//     age:"23"
//   },
//   {
//     firstName:"kola",
//     lastName:"lef",
//     age:"31"
//   },

// ];
 
// function App()
// {fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

function App() {
//   const [data, setData] = useState({});
//   // const [url, setUrl] = useState("http://www.boredapi.com/api/activity/?participants=2");
//   // const [rl, setrl] = useState("http://www.boredapi.com/api/activity/?participants=4");
//   const [participants, setParticipants] = useState("");
  
//   const [showBtn, setShowBtn] = useState("");
  
//   useEffect(() => {
//     fetch("http://www.boredapi.com/api/activity/?participants="+participants)
//       .then((response) => response.json())
//       .then((json) => setData(json));
     
//   setParticipants()
// },[participants]);
// let activ = () => {
//   fetch("http://www.boredapi.com/api/activity") //Data som har participants 1
//     .then((response) => response.json())
//     .then((json) => setData(json));
//   setShowBtn(showBtn + 1);
// };

 

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // },[url]);
   
  // console.log(data);

  // useEffect(() => {
  //   fetch(rl)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // },[rl]);
  // console.log(data);

//   return (
//     <div className="App">
//       <h1>love</h1>
//       <div>
//         <div>
//           {rl && rl.activity}
           
//         </div>
//         <button onClick={()=> setUrl("http://www.boredapi.com/api/activity/?participants=4")}>water</button>
//         <button onClick={()=> setrl("http://www.boredapi.com/api/activity/?participants=2")}>water</button>
//         </div>

//     </div>
//   );
// }

return (
  <div className="App">
        
    
    <h1>Activity app</h1>
    <Activity />
    
      
    {/* <div>
   <button onClick={activ}>Get random activity</button>
      {data && (<div>Activity:{data.activity}</div>)}   
      {data && (<div>Type:{data.type}</div>)}   
      {data && (<div>participants:{data.participants}</div>)}   
    </div>
      <button onClick={()=> setParticipants(4)}>Get 4 participants</button>
      <button onClick={()=> setParticipants(2)}>Get 2 participants</button>
      <button onClick={()=> setParticipants(1)}>Get 1 participant</button>
      </div> */}

  </div>
);
}      

 
export default App;

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()
// // useEffect(() => {axios
// //   .get("http://www.boredapi.com/api/activity/")
// //   .then(res => {
// //     console.log(res)
// //   })
// //   .catch(err => {
// //     console.log(err)
// //   })

// .then(res => res.json())
// .then((result) => {
//     setIsLoaded(true);
//     setItems(result);
//   },
// Note: it's important to handle errors here
// instead of a catch() block so that we don't swallow
// exceptions from actual bugs in components.

// })

// if (error) {
//   return <div>Error: {error.message}</div>;
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.key}>
//           {item.name} {item.price}
//         </li>
//       ))}
//     </ul>
//   );
// }
