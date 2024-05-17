// // import React, { useEffect, useState } from "react";
// // import axios from 'axios'

// // function Test() {
// //     const [data, setData] = useState(null);
    
// //     // useEffect(() => {
// //     //     const fetchData = async () => {
// //     //         const response = await fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3`)
// //     //         const newData = await response.json()
// //     //         setData(newData)
// //     //     };

// //     //     fetchData();
// //     // }, [])

// //     if (data) {
// //         console.log(data)
// //         return <div className='App'>{data.saltSuggestions}</div>;
// //     } else {
// //         return null;
// //     }

// // };

// // export default Test;


// import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState([]);
//   const apiUrl = 'https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3';

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const responseData = await response.json();
//         setData(responseData); // Set the fetched data to state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Call the fetch function
//   }, []);

//   return (
//     <div>
//       <h1>Medicine Suggestions</h1>
//       {data && (
//         <ul>
//           {/* Display each medicine suggestion */}
//           {data.map((medicine, index) => (
//             <li key={index}>{medicine.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
