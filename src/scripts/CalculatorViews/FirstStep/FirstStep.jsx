import style from './style.module.css';
import Input from '../../CalculatorComponents/Input/Input';

const FirstStep = () => {

    function handleClick(value) {
       
    }
    return (
        <>
        <h3>ГДЕ НУЖНО СДЕЛАТЬ РЕМОНТ?</h3>
        <form className={style.firstStep__Form}>
        <Input type="radio" name="radio1" value="Новостройка" label="Новостройка"  />
        <Input type="radio" name="radio1" value="Вторичное жилье" label="Вторичное жилье"  />
        <Input type="radio" name="radio1" value="Коммерческое помещение" label="Коммерческое помещение"  />
        </form>
        </>
    )
}
export default FirstStep