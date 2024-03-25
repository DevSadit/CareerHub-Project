import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const  {logo, id} = job;
  return (
    <div className="border">
      <h1>im gaja baba</h1>
      <img src={logo} />
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary ">View Details</button>
      </Link>
    </div>
  );
};

export default Job;