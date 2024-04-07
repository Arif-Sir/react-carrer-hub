// import React from 'react';

import Banner from "../Banner";
import CatagoryList from "../CatagoryList";
import FeatureJobs from "../FeatureJobs";

const Home = () => {
    return (
        <div className="text-center  ">
            
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;