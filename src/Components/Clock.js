import React, { useState, useEffect } from "react";
import "../styles.css";
export default function Clock() {
  const [time, setTime] = useState("");
  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }
  useEffect(() => {
    const timerid = setInterval(() => tick(), 1000);
    return function cleanup(){
      clearInterval(timerid);
    };
  });
  function tick() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    setTime(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
    );
  }
  return (
    <>
      <div className="clock">
        <div className="screen">
          <h1 className="time">{time}</h1>
        </div>
      </div>
    </>
  );
}
