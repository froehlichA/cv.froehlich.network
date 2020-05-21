import React, { useState } from "react";
import { TAU } from "zdog";
import { Illustration, Anchor, Cone } from "react-zdog";
import Animator from "./util/animator";

/**
 * A spinning "globe"-like structure composed of cones.
 */
export default () => {
  const [isSpinning, setSpinning] = useState(true);
  const color = "#E83";
  const backface = "#FED";
  return (
    <Illustration
      element="canvas"
      zoom={8}
      dragRotate
      onDragStart={() => setSpinning(false)}
      onDragEnd={() => setSpinning(true)}
    >
      <Anchor rotate={{ x: -10 }}>
        <Animator action={isSpinning ? "spin" : null}>
          {[1, -1].map(side => (
            <Cone
              diameter={8}
              length={8}
              translate={{ y: side * 16 }}
              rotate={{ x: (side * TAU) / 4 }}
              color={color}
              backface={backface}
              stroke={false}
            ></Cone>
          ))}
          {[
            [10, 0.5],
            [4.5, 0.5],
            [6, 0],
          ].map(line =>
            [1, -1].map(side =>
              [0, 1, 2, 3, 4, 5].map(rotation => (
                <Anchor rotate={{ y: (TAU / 5) * (rotation + line[1]) }}>
                  <Anchor rotate={{ x: TAU / line[0] }}>
                    <Cone
                      diameter={8}
                      length={8}
                      rotate={{ x: (-TAU / 4) * side }}
                      translate={{ y: -16 * side }}
                      color={color}
                      backface={backface}
                      stroke={false}
                    ></Cone>
                  </Anchor>
                </Anchor>
              ))
            )
          )}
        </Animator>
      </Anchor>
    </Illustration>
  );
};

/*
{[1, -1].map(side =>
        [0, 1, 2, 3, 4, 5].map(rotation => (
          <Anchor rotate={{ y: (TAU / 5) * (rotation + 0.5) }}>
            <Anchor rotate={{ x: TAU / 10 }}>
              <Cone
                diameter={8}
                length={10}
                rotate={{ x: (-TAU / 4) * side }}
                translate={{ y: -16 * side }}
                color={color}
                backface={backface}
                stroke={false}
              ></Cone>
            </Anchor>
          </Anchor>
        ))
      )}
      {[1, -1].map(side =>
        [0, 1, 2, 3, 4, 5].map(rotation => (
          <Anchor rotate={{ y: (TAU / 5) * (rotation + 0.5) }}>
            <Anchor rotate={{ x: TAU / 4.5 }}>
              <Cone
                diameter={8}
                length={10}
                rotate={{ x: (-TAU / 4) * side }}
                translate={{ y: -16 * side }}
                color={color}
                backface={backface}
                stroke={false}
              ></Cone>
            </Anchor>
          </Anchor>
        ))
      )}
      {[1, -1].map(side =>
        [0, 1, 2, 3, 4, 5].map(rotation => (
          <Anchor rotate={{ y: (TAU / 5) * rotation }}>
            <Anchor rotate={{ x: TAU / 6 }}>
              <Cone
                diameter={8}
                length={10}
                rotate={{ x: TAU / 4 * side }}
                translate={{ y: 16 * side }}
                color={color}
                backface={backface}
                stroke={false}
              ></Cone>
            </Anchor>
          </Anchor>
        ))
      )}*/
