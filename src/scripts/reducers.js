export function stepReducer(state, action) {
    switch(action.type) {
        case 'increment': {
            return {
                ...state,
                steps: state.steps + 1
            }
        }
        case 'decrement': {
            return {
                ...state,
                steps: state.steps - 1
            }
        }
        case 'disableNext': {
            return {
                ...state,
                isDisabledNext: true
            }
        }
        case 'disablePrev': {
            return {
                ...state,
                isDisabledPrev: true
            }
        }
        case 'enableButtons': {
            return {
                ...state,
                isDisabledNext: false,
                isDisabledPrev: false
            }
        }
    }

}