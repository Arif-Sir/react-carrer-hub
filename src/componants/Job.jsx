/* eslint-disable react/prop-types */
// import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title,company_name,location} = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex">
        <h2 className="flex"><CiLocationOn className="text-2xl mr-3"></CiLocationOn>{location}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">Apply
      </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;