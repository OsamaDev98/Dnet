import React from "react";
import { Link } from "react-router-dom";

const MainBtn = ({ path, title }) => {
  return (
    <Link
      className="bg-[#38bfdd] duration-300 hover:bg-[#00759b] hover:border-[#00759b] text-[1.2rem] border border-[#0fc1e7] text-white py-3 px-6 rounded-lg inline-block"
      to={path}
    >
      {title}
    </Link>
  );
};

export default MainBtn;
