import { useState } from "react";

type CounterHandlersType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export default function useCounters() {
  const [count, setCount] = useState<CounterHandlersType["count"]>(0);

  // increment the counter
  const handleIncrement: CounterHandlersType["increment"] = () => {
    setCount((prev) => prev + 1);
  };

  // decrement the counter
  const handleDecrement: CounterHandlersType["decrement"] = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
}
