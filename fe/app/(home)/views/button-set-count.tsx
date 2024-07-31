"use client";

import { Button } from "@/components/ui/button";
import useCounters from "../handlers/counters.handlers";
import ShowCount from "./show-count";

function ButtonSetCount() {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounters();

  return (
    <>
      <Button onClick={handleIncrement}>Click To Increment</Button>

      <ShowCount count={count} />

      <Button onClick={handleDecrement}>Click To Decrement</Button>

      <Button onClick={handleReset}>Reset</Button>
    </>
  );
}

export default ButtonSetCount;
