import { useReducer, useEffect } from "react";
import { stepReducer } from "./reducers.js";
import style from "./style.module.css";
import FirstStep from "./CalculatorViews/FirstStep/FirstStep.jsx";
import SecondStep from "./CalculatorViews/SecondStep/SecondStep.jsx";
import ThirdStep from "./CalculatorViews/ThirdStep/ThirdStep.jsx";
import FourthStep from "./CalculatorViews/FourthStep/FourthStep.jsx";
import Button from "./CalculatorComponents/Button/Button.jsx";
import FinalStep from "./CalculatorViews/FinalStep/FinalStep.jsx";
import FifthStep from "./CalculatorViews/FifthStep/FifthStep.jsx";

function optionReducer(state, action) {
  //
  switch (action.type) {
    case "FirstStep": {
      return {
        ...state,
        type: action.value,
      };
    }
    case "SecondStep": {
      return {
        ...state,
        design: action.value,
      };
    }
    case "ThirdStep": {
      return {
        ...state,
        area: action.value,
      };
    }
    case "FourthStep": {
      return {
        ...state,
        budget: action.value,
      };
    }
    case "FifthStep": {
      return {
        ...state,
        rooms: action.value,
      };
    }
    case "FinalStep": {
      return {
        ...state,
        phone: action.value,
      };
    }
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(optionReducer, {
    type: "Новостройка",
    design: "Да",
    area: 100,
    budget: 0,
    rooms: 3,
    phone: "",
  });
  const [stepsCount, dispatchSteps] = useReducer(stepReducer, {
    isDisabledNext: false,
    isDisabledPrev: false,
    steps: 1,
  });
  useEffect(() => {
    if (stepsCount.steps === 6) {
      dispatchSteps({ type: "disableNext" });
    }
    if (stepsCount.steps === 1) {
      dispatchSteps({ type: "disablePrev" });
    }
    if (stepsCount.steps !== 1 && stepsCount.steps !== 6) {
      dispatchSteps({ type: "enableButtons" });
    }
    console.log(state);
  }, [stepsCount.steps]);

  function switchComponents(step) {
    switch (step) {
      case 1:
        return (
          <FirstStep
            dispatch={dispatch}
            action="FirstStep"
            value={state.type}
          />
        );
      case 2:
        return (
          <SecondStep
            dispatch={dispatch}
            action="SecondStep"
            value={state.design}
          />
        );
      case 3:
        return (
          <ThirdStep
            dispatch={dispatch}
            action="ThirdStep"
            value={state.area}
          />
        );
      case 4:
        return (
          <FifthStep
            dispatch={dispatch}
            action="FifthStep"
            value={state.rooms}
          />
        );
      case 5:
        return (
          <FourthStep
            dispatch={dispatch}
            action="FourthStep"
            value={state.budget}
          />
        );
      case 6:
        return (
          <FinalStep dispatch={dispatch} action="FinalStep" value={state} />
        );
    }
  }

  return (
    <div className={style.calculator_inner_container}>
      <h2>Рассчитайте стоимость ремонта!</h2>
      <div className={style.stepContainer}>
        {switchComponents(stepsCount.steps)}
      </div>
      <div className={style.buttonsContainer}>
        <Button
          click={dispatchSteps}
          action="increment"
          isDisabled={stepsCount.isDisabledNext}
          name="Далее"
        />
        <Button
          click={dispatchSteps}
          action="decrement"
          isDisabled={stepsCount.isDisabledPrev}
          name="Назад"
        />
      </div>
      <p>Шаг {stepsCount.steps} из 6</p>
    </div>
  );
};
export default Calculator;