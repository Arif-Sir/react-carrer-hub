// import React from 'react';

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "./JsFile/localstore";

const Appliedjobs = () => {
    const jobs= useLoaderData();
    useEffect(()=>{
        const storeId = getStoredData();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => )
        }
    },[])
    return (
        <div>
            <h3>Jobs i applied</h3>
        </div>
    );
};

export default Appliedjobs;