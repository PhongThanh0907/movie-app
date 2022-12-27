import React from "react";
import { useEffect } from "react";

const usePrevious = (value: HTMLDivElement) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
