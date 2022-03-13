import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-white"> Team BASIC V. 👋</h1>
        <p className="text-gray-400 mt-5 text-lg">
          B(ibhash) - A(nurag) - S(aheb) - I(shan) - C(harmi) - V(inayak) !!!
        </p>
        <Link to="/login">
          <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
            Lets Begin !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
