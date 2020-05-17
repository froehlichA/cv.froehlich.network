import React, { useRef, ReactNode } from "react";
import { Anchor, useRender } from "react-zdog";

interface ZAnimatorProps {
  action: "spin" | null;
  children: ReactNode;
}

export default ({ action, children }: ZAnimatorProps) => {
  const ref = useRef(undefined);
  useRender(() => {
    switch (action) {
      case "spin":
        ref.current.rotate.y += 0.01;
        break;
      default:
        break;
    }
  }, [action]);
  return <Anchor ref={ref}>{children}</Anchor>;
};
