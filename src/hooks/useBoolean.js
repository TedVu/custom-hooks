import React, { useState } from "react";

const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  const setTrue = () => {
    if (state === false) {
      setState(true);
    }
  };

  const setFalse = () => {
    if (state === true) {
      setState(false);
    }
  };
  return [
    state,
    {
      toggle,
      setTrue,
      setFalse,
    },
  ];
};

export { useBoolean };
