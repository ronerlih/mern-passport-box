import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";

function Home({ username }) {

    return <>
        <div>Home<button><Link to={"/uploadRec"}>Upload</Link></button></div>
    </>
}

export default Home;