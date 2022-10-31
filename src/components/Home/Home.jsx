import React from 'react'
import Me from "../../assets/1586342076871.jpeg";
import "./Home.scss"
const Home = () => {
  return (
    <>
      <div id="home">
        <div id="container">
          <div id="home_col_1">
           
            <h2 id="description"></h2>
          </div>
          <div id="home_col_2"><img src={Me} alt="img" /></div>
        </div>
      </div>
    </>
  );
}

export default Home