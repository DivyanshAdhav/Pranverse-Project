// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import TopNavbar from "./Pages/TopNavbar";
// import Footer from "./Pages/Footer";
// import WhatsAppButton from "./Pages/WhatsAppButton";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// // import Courses from "./pages/Courses";
// import Contact from "./Pages/Contact";

// function App() {
//   return (
//     <>
//       <TopNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/courses" element={<Courses />} /> */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//       <WhatsAppButton />
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./Pages/TopNavbar";
import Footer from "./Pages/Footer";
import WhatsAppButton from "./Pages/WhatsAppButton";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Landing/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
