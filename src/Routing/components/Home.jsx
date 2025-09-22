import React from "react";
import Logo from "../../assets/react.svg";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl md:text-3xl text-blue-600 font-bold text-center mb-8">
        Welcome to the Home Page — practicing React Routing
      </h1>

      <img
        src={Logo}
        alt="React Logo"
        className="w-40 md:w-60 lg:w-80 animate-bounce"
      />
    </div>
  );
}

export default Home;
