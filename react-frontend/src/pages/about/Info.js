import React, { useEffect, useState } from "react";

const Info = () => {
  const [count, setCount] = useState(0);
  const [row, setRow] = useState([]);

  useEffect(() => {
    setRow((prevRow) => [...prevRow, <div key={count}> Test</div>]);

  }, [count]);

  const handlePush = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">{row}</div>
      </div>
      <div className="row">
        <div className="col-12">
          <button onClick={handlePush} className="btn btn-outline-dark">
            Push
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
