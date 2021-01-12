import React from "react";
import { Link } from "react-router-dom";


function Home({ username }) {

    return <>
        <div>Home
            <button><Link to={"/uploadRec"}>Upload</Link></button>
            <button><Link to={"/searchRec"}>Search</Link></button>
        </div>
    </>
}

export default Home;