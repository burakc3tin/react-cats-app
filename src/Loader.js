import axios from "axios";
import { React, useEffect, useState } from "react";
import "./image.css";
import cat3 from "./cat3.gif";

function Loader() {


    return (
        <div className="loader">

<img src={cat3} className ="img-fluid" alt="Responsive image" />

        </div>
    );
}




export default Loader;