import React, { useEffect, useState } from "react";
import { ReactTextSwitch } from "./react-text-switch";
import { ReactTextCycleProps } from "./types";

export const ReactTextCycle: React.FC<ReactTextCycleProps> = ({
  words,
  interval = 5000,
  ...restProps
}) => {
  const [wordIdx, setWordIdx] = useState(0);
  const word = words[wordIdx];

  useEffect(() => {
    const inter = setInterval(() => {
      setWordIdx((prev) => (prev < words.length - 1 ? prev + 1 : 0));
    }, interval);
    return () => {
      clearInterval(inter);
    };
  }, [interval, words.length]);

  return <ReactTextSwitch word={word} {...restProps} />;
};
