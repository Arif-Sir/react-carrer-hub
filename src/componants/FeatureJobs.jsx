// import React from 'react';

import { useEffect, useState } from "react";
import Job from "./Job";


const FeatureJobs = () => {
    const[jobs,setJobs]=useState([]);
    const [dataLength,setDatalength]=useState(2);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
       <div>
         <div>
            <h2 className="text-5xl m-3">Feature Jobs: {jobs.length}</h2>
            <p>This is the job Feature list</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
           {jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)}
        </div>
        <div className={dataLength===jobs.length?'hidden':''}>
            <button 
            onClick={()=>setDatalength(jobs.length)}
            className="btn btn-primary">
                show all jobs
            </button>
        </div>
       </div>
    );
};

export default FeatureJobs;