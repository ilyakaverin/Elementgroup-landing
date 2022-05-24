import { useReducer, useEffect } from "react";
import { stepReducer } from "./reducers.js";
import FirstStep from "./CalculatorViews/FirstStep/FirstStep.jsx";
import SecondStep from './CalculatorViews/SecondStep/SecondStep.jsx';
import ThirdStep from "./CalculatorViews/ThirdStep/ThirdStep.jsx";
import FourthStep from './CalculatorViews/FourthStep/FourthStep.jsx'
import Button from "./CalculatorComponents/Button/Button.jsx";
import FinalStep from "./CalculatorViews/FinalStep/FinalStep.jsx";


function optionReducer(state, action) {
    //
}
function switchComponents(step) {
    switch(step) {
        case 1: 
        return <FirstStep />;
        case 2:
         return <SecondStep />
         case 3:
             return <ThirdStep />
             case 4:
                 return <FourthStep />
                 case 5: 
                 return <FinalStep />
                 
    }
}


const Calculator = () => {

   const [state, dispatch] = useReducer(optionReducer, {
       firstStep: null
   });
   const [stepsCount, dispatchSteps] = useReducer(stepReducer, {
       isDisabledNext: false,
       isDisabledPrev: false,
       steps: 1
   });
   useEffect(() => {
       if(stepsCount.steps === 5) {
           dispatchSteps({type: 'disableNext'})
       } 
       if(stepsCount.steps === 1) {
           dispatchSteps({type: 'disablePrev'})
       } 
       if(stepsCount.steps !== 1 && stepsCount.steps !== 5) {
        dispatchSteps({type: 'enableButtons'})
       }

   },[stepsCount.steps])
 

   

    return (
        <div className="q">
        <div className="stepContainer">
        {switchComponents(stepsCount.steps)}
        </div>
        
        <Button click={dispatchSteps} action="increment" isDisabled={stepsCount.isDisabledNext} name="Далее" />
        <Button click={dispatchSteps} action="decrement" isDisabled={stepsCount.isDisabledPrev} name="Назад" />
        <p>Step {stepsCount.steps} of 5</p>
        </div>
    )
}
export default Calculator