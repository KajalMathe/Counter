import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

function Home(props){
    return(
        <>
        {/* <Nav></Nav>
        <div>
            <Content></Content> */}
            <h1 id="">{props.car.name}</h1>
            {/* <Footer></Footer>
        </div> */}

        </>
    )
}
export default Home;