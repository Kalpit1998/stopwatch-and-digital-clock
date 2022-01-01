import { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    setCtime(time);
    setCdate(date);
  }, 1000);

  return (
    <div className="container">
      <h1>Digital Clock</h1>
      <h2>{cdate}</h2>
      <h2>{ctime}</h2>
    </div>
  );
};

export default Clock;