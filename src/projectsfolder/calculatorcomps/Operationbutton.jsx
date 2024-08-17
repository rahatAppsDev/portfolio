import { ACTIONS } from "./Calculatorpage/Calculatorpage";

const Operationbutton = ({ operation, dispatch }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default Operationbutton;
