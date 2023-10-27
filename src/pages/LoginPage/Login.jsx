import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="flex items-center justify-center container mx-auto space-y-24">
        <div className="text-center">
          <h1 className="font-serif text-white text-6xl  animate-pulse ">
            LOGIN
          </h1>
          <div className="card text-white scale-150 p-2.5 my-1.5 shadow-black">
            <Link to="/home"><button type="submit">Login</button></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Login;
