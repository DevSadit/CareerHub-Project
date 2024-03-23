const Banner = () => {
    return (
      <div className="flex justify-between items-center px-52 bg-[#7E90FE0D]">
        <div className="space-y-5">
          <h1 className="font-extrabold text-7xl">
            One Step <br /> Closer To Your <br /> Dream Job
          </h1>
          <p className="font-medium text-lg text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img src="images/user.png" />
        </div>
      </div>
    );
};

export default Banner;