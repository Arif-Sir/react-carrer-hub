// import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "./JsFile/localstore";


const JobDeatils = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const job=jobs.find(job=>job.id===idInt);
    // console.log(id,job);

    const handelToast= () =>{
        saveApplication(id);
        toast('Aplied succes');
    }
    return (
        <div className="">
            <h2 className="text-3xl">About this Job: {job.job_title}</h2>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>Deatis is here</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2>Side details</h2>
                    <button onClick={handelToast} className="btn btn-primary">Apply Now
                     </button>
                     <ToastContainer />
                </div>


            </div>
        </div>
    );
};

export default JobDeatils;