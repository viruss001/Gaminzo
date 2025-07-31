import React from "react";

const AboutFeatures = () => {
  const data = [
    { title: "DATA DRIVEN", img: "", des: "90% Data, 10% Gut. Experiment w/o bias" },
    { title: "OWNERSHIP", img: "", des: "Sign the best & get out of their way! No Blame Game" },
    { title: "PERSEVERANCE", img: "", des: "Play hard. Work harder.\nEffort > Outcome" },
    { title: "USER FIRST", img: "", des: "Sports teams are nothing without their fans.\nFocus on user problems" },
    { title: "TRANSPARENCY", img: "", des: "Hits, Misses, Learnings & Gameplans shared openly." },
  ];

  return (
    <div className="w-[90vw] m-auto mt-10 mb-10 flex flex-wrap justify-between gap-5">
      {data.map((value, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-[10rem] p-4 bg-red-800 text-white rounded-lg"
        >
          <h3 className="font-bold text-lg mb-2">{value.title}</h3>
          {value.img && <img src={value.img} alt={value.title} className="w-12 h-12 mb-2" />}
          <p className="text-sm text-center leading-relaxed whitespace-pre-line">
            {value.des}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;
