import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Winners from "./components/Winners";
import Footer from "./components/Footer";

// import { useState } from "react";


// function App() {
//   return (
//     <>
//       <h1>FIRST</h1>
//       <h1>SECOND</h1>
//     </>  
//     );
  
// };

// function App() {
//   return (
//     <div>
//       <div>
//         <h1>29</h1>
//       </div>
//     </div>  
//     );
  
// }

// function App() {
//   const [number, setNumber] = useState(470);

//   return (
//     <div>
//       <div>
//         <h1>Number: {number}</h1>
//       </div>

//       <button onClick={()=> {setNumber(500)}}>INCREMENT</button>
//     </div>  
//   );
  
// }

// function App() {
//   const [number, setNumber] = useState(0);

  
//   return (
//     <div>
//       <div>
//         <h1>Number: {number}</h1>
//       </div>

//       <button onClick={()=> {setNumber(number + 1)}}>INCREMENT</button>

//       <button onClick={()=> {setNumber(number - 1)}}>DECREMENT</button>

//     </div>  
//   ); 
// }

// function App() {
//   const [number, setNumber] = useState(0);

//   const handleIncrement = ()=> {
//     setNumber(number + 1);
//   };

// function App() {
//   const [number, setNumber] = useState(0);

//   const handleIncrement = ()=> {
//     if (number === 10) {
//       alert("Number can not be greater than 10")
//     } else {
//       setNumber(number + 1);

//     }
//   };

  // const handleDecrement = ()=> {
  //   setNumber(number - 1);
  // };

  // const handleDecrement = ()=> {
  //   if (number >= 0) {
  //     setNumber(number - 1);
      
  //   }else {
  //     alert("Number can not be less than 0")
  //   }
  // };

//   const handleDecrement = ()=> {
//     if (number === 0) {
//       alert("Number can not be less than 0")
      
//     }else {
//       setNumber(number - 1);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Number: {number}</h1>
//       </div>

//       <button onClick={handleIncrement}>INCREMENT</button>

//       <button onClick={handleDecrement}>DECREMENT</button>

//     </div>  
//   );
  
// }


function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Competitions />

      <HowItWorks />

      <Testimonial />

      <Winners />

      <Footer />
    </div>
  );
}

export default App;
