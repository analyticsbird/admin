/* eslint-disable react/require-default-props */
import React from "react";

interface PropTypes{
    text:string;
    type: "heading" | "subheading";
    className?: string
}

const H1:React.FC<{text: string, className?: string}> = ({ text, className }) => (
  <>
    <h1 className={`${className || ""} text-4xl  text-gray-500 font-semibold mt-0 mb-0`}>
      {text}
    </h1>
  </>
);

const H2:React.FC<{text: string, className?: string}> = ({ text, className }) => (
  <>
    <h1 className={`${className || ""} text-2xl uppercase text-gray-500 font-semibold mt-0 mb-10`}>
      {text}
    </h1>
  </>
);

const Typo:React.FC<PropTypes> = ({ text, type, className }) => (
  <>
    {type === "heading" && <H1 text={text} className={className} />}
    {type === "subheading" && <H2 text={text} className={className} />}
  </>
);

export default Typo;
