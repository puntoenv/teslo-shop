"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState<number>(quantity);
  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    setCount((prev) => prev + value);
  };

  return (
    <div className="flex">
      <button disabled={count === 1} onClick={() => onQuantityChanged(-1)}>
        <IoRemoveCircleOutline
          className={clsx("transition-colors", {
            "text-black/50": count === 1,
          })}
          size={30}
        />
      </button>
      <span className="w-20 mx-3 grid place-content-center bg-gray-100 text-center rounded">
        {count}
      </span>
      <button onClick={() => onQuantityChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
