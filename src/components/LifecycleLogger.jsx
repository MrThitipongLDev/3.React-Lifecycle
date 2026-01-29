import { useEffect, useState } from "react";

const LifecycleLogger = () => {
  const [count, setCount] = useState(0);

  // component did update
  useEffect(() => {
    console.log("Component mounted....");

    // component will unmount
    return () => {
      console.log("Component unmount...");
    };
  }, []);

  // component did update
  useEffect(() => {
    if (count > 0) {
      console.log("component updated....", count);
    }
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="logger-container">
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count : {count}</p>
      <button onClick={incrementCount} className="secondary-btn">
        Update
      </button>
    </div>
  );
};

export default LifecycleLogger;
