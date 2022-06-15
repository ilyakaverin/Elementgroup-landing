import { useReducer, useEffect } from "react";
import { stepReducer, optionReducer } from "./reducers.js";
import { convertStateIntoString, regex } from "../service.js";
import axios from "axios";
import * as style from "./style.module.css";
import FirstStep from "./CalculatorViews/FirstStep/FirstStep.jsx";
import SecondStep from "./CalculatorViews/SecondStep/SecondStep.jsx";
import ThirdStep from "./CalculatorViews/ThirdStep/ThirdStep.jsx";
import FourthStep from "./CalculatorViews/FourthStep/FourthStep.jsx";
import Button from "./CalculatorComponents/Button/Button.jsx";
import FinalStep from "./CalculatorViews/FinalStep/FinalStep.jsx";
import FifthStep from "./CalculatorViews/FifthStep/FifthStep.jsx";

const Calculator = () => {
  const [state, dispatch] = useReducer(optionReducer, {
    type: "Новостройка",
    design: "Да",
    area: 100,
    budget: 500,
    rooms: 3,
    phone: "",
    isReady: false,
    sent: false,
    isDisabledButton: true,
    errors: null,
  });

  const [stepsCount, dispatchSteps] = useReducer(stepReducer, {
    isDisabledNext: false,
    isDisabledPrev: false,
    steps: 0,
  });
  const componentArray = [
    <FirstStep dispatch={dispatch} action="FirstStep" value={state.type}/>,
    <SecondStep dispatch={dispatch} action="SecondStep" value={state.design}/>,
    <ThirdStep dispatch={dispatch} action="ThirdStep" value={state.area}/>,
    <FourthStep dispatch={dispatch} action="FourthStep" value={state.budget}/>,
    <FifthStep dispatch={dispatch} action="FifthStep" value={state.rooms}/>,
    <FinalStep dispatch={dispatch} action="FinalStep" value={state} />
    ]

  useEffect(() => {
    if (stepsCount.steps === componentArray.length - 1) {
      dispatchSteps({ type: "disableNext" });
    }
    if (stepsCount.steps === 0) {
      dispatchSteps({ type: "disablePrev" });
    }
    if (stepsCount.steps !== 0 && stepsCount.steps !== componentArray.length - 1) {
      dispatchSteps({ type: "enableButtons" });
    }

    if (state.phone.match(regex) && state.phone.length > 10) {
      dispatch({ type: "enableCalculatorSendButton" });
    } else {
      dispatch({ type: "disableCalculatorSendButton" });
    }

    if (state.isReady) {
      const converted = convertStateIntoString(state);
      dispatch({ type: "disableCalculatorSendButton" });
      axios
        .post("send.php", converted)
        .then(() => {
          dispatch({ type: "successSent" });
          dispatchSteps({ type: "disablePrev" });
        })
        .catch(() => {
          dispatch({ type: "enableCalculatorSendButton" });
        });
    }
  }, [stepsCount.steps, state.isReady, state.phone]);

  

  

  return (
    <div className={style.calculator_inner_container}>
      <h2>Рассчитайте стоимость ремонта!</h2>
      <div className={style.stepContainer}>
        {componentArray[stepsCount.steps]}
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
      <p>Шаг {stepsCount.steps + 1} из 6</p>
    </div>
  );
};
export default Calculator;
