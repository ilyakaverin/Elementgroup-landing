export function stepReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        steps: state.steps + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        steps: state.steps - 1,
      };
    }
    case "disableNext": {
      return {
        ...state,
        isDisabledNext: true,
      };
    }
    case "disablePrev": {
      return {
        ...state,
        isDisabledPrev: true,
      };
    }
    case "enableButtons": {
      return {
        ...state,
        isDisabledNext: false,
        isDisabledPrev: false,
      };
    }
  }
}

export function optionReducer(state, action) {
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
    case "sendData": {
      return {
        ...state,
        sendOptions: {
          ...state,
          isReady: true,
        },
      };
    }
    case "successSent": {
      return {
        ...state,
        sendOptions: {
          ...state,
          sent: true,
        },
      };
    }
    case "disableCalculatorSendButton": {
      return {
        ...state,
        sendOptions: {
          ...state,
          isDisabledButton: true,
        },
      };
    }
  }
}
