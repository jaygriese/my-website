import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg";
import img19 from "./images/img19.jpg";
import img20 from "./images/img20.jpg";
import img21 from "./images/img21.jpg";
import img22 from "./images/img22.jpg";
import img23 from "./images/img23.jpg";
import img24 from "./images/img24.jpg";
import img25 from "./images/img25.jpg";
import img26 from "./images/img26.jpg";
import img27 from "./images/img27.jpg";
import img28 from "./images/img28.jpg";

import { ImageSlider } from "./ImageSlider";
import React from "react";
import Navbar from "./components/Navbar";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const IMAGES = [
  img1,
  img2,
  // img3,
  img4,
  img5,
  // img6,
  img7,
  img10,
  img11,
  img12,
  img14,
  // img15,
  img16,
  img17,
  img18,
  // img19,
  img20,
  img21,
  img22,
  img23,
  // img24,
  img25,
  img26,
  // img27,
  img28,
];


function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router> */}
      <Navbar />
      <div
        style={{
          maxWidth: "1920px",
          margin: "0 auto",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </>
  );
}

export default App;
