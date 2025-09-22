import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h2 className="font-bold text-2xl md:text-3xl text-blue-500 mb-6">
          Welcome to the About Page
        </h2>
        <p className="text-slate-600 leading-relaxed text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nisi harum,
          odio ab reiciendis nulla ratione quidem nobis aspernatur nemo labore sunt sed
          minima dignissimos consequuntur, nostrum aut non explicabo? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Perspiciatis assumenda officiis dolorum
          laborum quidem nobis, dolor sit aliquam quisquam voluptate veniam odio animi,
          unde at, illo atque iusto sequi minima?
        </p>
      </div>
    </div>
  );
}

export default About;
