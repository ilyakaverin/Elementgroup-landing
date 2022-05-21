import { useState } from "react"


const Calculator = () => {

    const [state, setState] = useState(0);

    return (
        <>
        <p>{state}</p>
        <button onClick={() => setState(prevState => prevState += 1)}>Increment</button>
        </>
    )
}
export default Calculator