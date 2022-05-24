import Input from "../../CalculatorComponents/Input/Input"

const ThirdStep = () => {
    return (
        <>
        <h3>КАКАЯ ОБЩАЯ ПЛОЩАДЬ ВАШЕЙ КВАРТИРЫ</h3>
        <Input type="range" min="1" max="200" label="Площадь помещения" />
        </>
    )
}
export default ThirdStep