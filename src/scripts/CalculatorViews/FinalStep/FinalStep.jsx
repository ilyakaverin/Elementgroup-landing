import style from './style.module.css';
import Button from '../../CalculatorComponents/Button/Button.jsx';

const FinalStep = () => {
    return (
        <form>
            <input type="text" name="phone" placeholder="Ваш телефон" />
            <Button name="Отправить" />
        </form>
    )
}
export default FinalStep