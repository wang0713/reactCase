import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Hook4 = () => {
  const state = useSelector((state) => state.toJS());
  const dispatch = useDispatch();
  console.log(state.search);
  return (
    <div>
      <div>{state.search.keyword}</div>
      <button
        onClick={() => {
          console.log(dispatch);
          dispatch({
            type: "set",
            payload: "whag",
          });
        }}
      >
        dianji{" "}
      </button>
    </div>
  );
};

export default Hook4;
