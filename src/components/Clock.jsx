import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("hi");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [show]);

  return (
    <div>
      {show ? <h1>Current Time : {time}</h1> : ""}
      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
    </div>
  );
};

export default Clock;
