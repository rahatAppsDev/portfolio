
import {ACTIONS } from "./Calculatorpage/Calculatorpage"
const Digitbutton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_Digit, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default Digitbutton;
