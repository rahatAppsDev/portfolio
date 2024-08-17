
'use client'
import "./Calculatorpage.css"
import { useReducer } from "react";
import Digitbutton from "@/projectsfolder/calculatorcomps/Digitbutton";
import Operationbutton from "@/projectsfolder/calculatorcomps/Operationbutton";

export const ACTIONS = {
  ADD_Digit: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_Digit:
      console.log("digit add");
      if (state.overwrite) {
        console.log("1");
        return {
          ...state,
          currentoperand: `${payload.digit}`,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentoperand === "0") {
        console.log("2");
        return state;
      }

      if (payload.digit === "." && state.currentoperand.includes(".")) {
        console.log("3");
        return state;
      }
      console.log("4");

      return {
        ...state,
        currentoperand: `${state.currentoperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentoperand == null && state.previousoperand == null) {
        return state;
      }
      if (state.currentoperand == null) {
        return { ...state, operation: payload.operation };
      }
      if (state.previousoperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousoperand: state.currentoperand,
          currentoperand: null,
        };
      }
      return {
        ...state,
        previousoperand: evaluate(state),
        operation: payload.operation,
        currentoperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentoperand: null,
        };
      }
      if (state.currentoperand == null) return state;
      if (state.currentoperand.length === 1) {
        return {
          ...state,
          currentoperand: null,
        };
      }
      return {
        ...state,
        currentoperand: state.currentoperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentoperand == null ||
        state.previousoperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousoperand: null,
        currentoperand: evaluate(state),
        operation: null,
      };
  }
}

function evaluate({ currentoperand, previousoperand, operation }) {
  const prev = parseFloat(previousoperand);
  const current = parseFloat(currentoperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case `${"\u00F7"}`:
      computation = prev / current;
      break;
  }
  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatoperand(operand) {
  if (operand == null) return;
  console.log("myoperand", typeof operand);
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}






















function Calculatorpage() {
  const [{ currentoperand, previousoperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculatorpage">
        <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousoperand} {operation}
        </div>
        <div className="current-operand">{formatoperand(currentoperand)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => {
          dispatch({ type: ACTIONS.CLEAR });
        }}
      >
        AC
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_DIGIT });
        }}
      >
        DEL
      </button>
      <Operationbutton operation={"\u00F7"} dispatch={dispatch} />
      <Digitbutton digit={1} dispatch={dispatch} />
      <Digitbutton digit={2} dispatch={dispatch} />
      <Digitbutton digit={3} dispatch={dispatch} />
      <Operationbutton operation="*" dispatch={dispatch} />
      <Digitbutton digit={4} dispatch={dispatch} />
      <Digitbutton digit={5} dispatch={dispatch} />
      <Digitbutton digit={6} dispatch={dispatch} />
      <Operationbutton operation="+" dispatch={dispatch} />
      <Digitbutton digit={7} dispatch={dispatch} />
      <Digitbutton digit={8} dispatch={dispatch} />
      <Digitbutton digit={9} dispatch={dispatch} />
      <Operationbutton operation="-" dispatch={dispatch} />
      <Digitbutton digit="." dispatch={dispatch} />
      <Digitbutton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => {
          dispatch({ type: ACTIONS.EVALUATE });
        }}
      >
        =
      </button>
    </div>
    </div>
    
  );
}

export default Calculatorpage;