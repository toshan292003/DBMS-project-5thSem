import { React, useState } from "react";
import "./progress.css";
export default function Progress(props) {
  const something = 314 - props.percentage * 3.14;
  function something2() {
    if (props.percentage == 100) {
      return 5000;
    } else {
      return 314;
    }
  }
  function something3() {
    if (props.percentage == 0) {
      return 0;
    } else {
      return 20;
    }
  }
  return (
    <>
      <div class="outer">
        <div className="inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="60"
              style={{
                strokeDashoffset: `${something}`,
                strokeWidth: `${something3()}`,
                strokeDasharray: `${something2()}`,
              }}
            />
          </svg>
          <span>{props.percentage}%</span>
        </div>
        <div className="pronames">{props.title}</div>
      </div>
    </>
  );
}
