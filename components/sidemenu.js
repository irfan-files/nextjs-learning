import { useState } from "react";

const SideMenu = () => {
  const [count, setCount] = useState(0);

  const loltest = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const testlol = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>

      <div>
        <button onClick={loltest} className="btn btn-primary">
          lol test
        </button>
        <button onClick={testlol} className="btn btn-primary">
          test lol
        </button>
      </div>

      <h1>{count}</h1>
    </div>
  );
};

export default SideMenu;
