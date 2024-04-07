// const getStoredData = () =>{
//     const storeApllication = localStorage.getItem('job-App');
//     if(storeApllication){
//         return JSON.parse(storeApllication);
//     }
//     return[];
// }

const getStoredData =() =>{
    const storeApplication= localStorage.getItem('jobApp');
    if(storeApplication){
        return JSON.parse(storeApplication);
    }
    return[];
}



// const saveApplication = id =>{
//     const storeApllications= getStoredData();
//     const exists = storeApllications.find(jobId => jobId === id);
    
//     if(!exists){
//         storeApllications.push(id);
//         localStorage.setItem('job-App',JSON.stringify(storeApllications));
//     }
// };

// export {getStoredData,saveApplication}

const saveApplication = id =>{
 const storeApplications = getStoredData();
 const exists= storeApplications.find(jobId=> jobId===id)
 if(!exists){
    storeApplications.push(id);
    localStorage.setItem('jobApp', JSON.stringify(storeApplications));
 }
}
export {getStoredData, saveApplication}