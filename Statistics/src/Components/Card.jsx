// src/components/Card.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = ({ percentage, current, total, label, color }) => {
  return (
    <div className="flex flex-col items-center p-5  rounded-xl w-40">
      <div className="w-16 h-16 mb-3">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: "black",
            trailColor: "grey",
            textSize: "24px",
          })}
        />
      </div>
      <div className="text-sm font-semibold text-gray-900">
        {current} / {total}
      </div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
};

export default Card;
