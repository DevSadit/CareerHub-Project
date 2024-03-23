import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategory = () => {
    const [category, setCategory]=useState([]);
    useEffect(()=>{
        fetch(`categories.json`)
        .then(res=> res.json())
        .then(data => setCategory(data))
    },[])
    return (
      <div>
        <div className="text-center space-y-4 mt-32">
          <h1 className="text-5xl font-extrabold">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 mt-5">
          {category.map((item) => (
            <Category item={item} key={item.id}></Category>
          ))}
        </div>
      </div>
    );
};

export default JobCategory;