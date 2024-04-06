import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full flex justify-center items-center h-[100px] bg-zinc-700">
      <Link
        to="/createtodo"
        className="bg-red-400 rounded-md p-2 text-white font-bold"
      >
        Create Todo
      </Link>
    </div>
  );
};

export default Nav;
