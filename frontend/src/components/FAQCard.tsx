import React from "react";
import { FAQList } from "@/config/list--config";
import Quest from "./Quest";
type Props = {
  show?: boolean;
};
const FAQCard = ({ show = false }: Props) => {
  return (
    <div className="w-full sm:w-[800px]  bg-gray-1 mx-auto rounded-3xl my-12 p-6">
      <div className="size-full">
        {!show &&
          FAQList.map((item, idx) => {
            return idx < 5 && <Quest key={idx} {...item} />;
          })}
        {show &&
          FAQList.map((item, idx) => {
            return <Quest key={idx} {...item} />;
          })}
      </div>
    </div>
  );
};

export default FAQCard;
