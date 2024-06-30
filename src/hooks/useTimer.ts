import React, { useEffect, useRef, useState } from "react";

type Returned = [number, React.Dispatch<React.SetStateAction<number>>];

const useTimer = (
  initTimerValue: number,
  dep?: React.DependencyList
): Returned => {
  const [timer, setTimer] = useState(initTimerValue);
  const depsArray = dep ? [timer, ...dep] : [timer];

  useEffect(() => {
    const timeOut = setTimeout(
      () => (timer ? setTimer((prev) => prev - 1) : null),
      1000
    );

    return () => clearInterval(timeOut);
  }, depsArray);

  return [timer, setTimer];
};

export default useTimer;
