import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs, setJobs]= useState([]);

    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch(`jobs.json`)
          .then((res) => res.json())
          .then((data) => setJobs(data));
    },[])
    return (
      <div>
        <div className="text-center space-y-4 mt-32">
          <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 mx-56">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div
          className={
            dataLength === jobs.length
              ? "hidden text-center my-12 "
              : "text-center my-12 "
          }
        >
          <button onClick={() => setDataLength(jobs.length)} className="btn">
            See All Jobs
          </button>
        </div>
      </div>
    );
};

export default FeaturedJobs;