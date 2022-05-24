import style from './style.module.css';
import Input from '../../CalculatorComponents/Input/Input';
const SecondStep = () => {
    return (
        <form className={style.secondStep__Form}>
        <h3>Нужен ли дизайн проект?</h3>
        <Input type="radio" name="radio2" value="Да" label="Да" />
        <Input type="radio" name="radio2" value="Нет" label="Нет" />
        </form>
    )
}
export default SecondStep