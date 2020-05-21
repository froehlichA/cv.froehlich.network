import React, { useState } from "react";
import { TAU } from "zdog";
import { Illustration, Anchor, Box, Cylinder } from "react-zdog";
import Animator from "./util/animator";

export default () => {
  const [isSpinning, setSpinning] = useState(true);
  return (
    <Illustration
      element="canvas"
      zoom={30}
      dragRotate
      onDragStart={() => setSpinning(false)}
      onDragEnd={() => setSpinning(true)}
    >
      <Animator action={isSpinning ? "spin" : null}>
        <Anchor rotate={{ x: TAU / 10, y: TAU / 8 }}>
          {[-2, 2].map(x =>
            [-2, 2].map(y =>
              [-2, 2].map(z => (
                <Box
                  stroke={false}
                  width={1.5}
                  height={1.5}
                  depth={1.5}
                  translate={{ x, y, z }}
                  color="#369"
                ></Box>
              ))
            )
          )}
          {[{}, { y: TAU / 4 }, { x: TAU / 4 }].map(a =>
            [-2, 2].map(x =>
              [-2, 2].map(y => (
                <Anchor rotate={a}>
                  <Cylinder
                    stroke={false}
                    diameter={0.5}
                    length={2.5}
                    color="#E83"
                    translate={{ x, y }}
                  ></Cylinder>
                </Anchor>
              ))
            )
          )}
        </Anchor>
      </Animator>
    </Illustration>
  );
};
