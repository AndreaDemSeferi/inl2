// import React from 'react';
// import axios from 'axios'
// import {useState ,useEffect } from 'react'
// // const employeeInfo= [

// function Code() {
//     const [posts,setPosts]=useState([])

//     useEffect(() =>{
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(res => {
//           console.log(res)
//             setPosts(res.data)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     },[])
//     // "http://www.boredapi.com/api/activity/"
//   return (<div>
//       <ul>
//           {
//               posts.map(
//                   post=>(<li key={post.id}>{post.title}</li>
              
//                   ))}
//       </ul>

//   </div>
//   )
// }

// export default Code;
// import React, { useState } from "react";

// const useInputValue = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   return {
//     value,
//     onChange: e => setValue(e.target.value),
//     resetValue: () => setValue("")
//   };
// };

// export default ({ onSubmit }) => {
//   const { resetValue, ...text } = useInputValue("");

//   return (
//     <form
//       onSubmit={e => {
//         e.preventDefault();
//         onSubmit(text.value);
//         resetValue();
//       }}
//     >
//       <input {...text} />
//     </form>
//   );
// };
