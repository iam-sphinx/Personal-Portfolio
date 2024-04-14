"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  question: string;
  answer: string;
};
const Quest = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1
          className={`font-Glory text-lg font-medium ${
            open ? "text-white" : "text-[#a6a6a6]"
          }`}
        >
          {question}
        </h1>
        <button onClick={() => setOpen((state) => !state)}>
          {open ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* Answer */}
      {open && <p className="mt-6">{answer}</p>}

      <div className="w-full border-white border my-6"></div>
    </div>
  );
};

export default Quest;
