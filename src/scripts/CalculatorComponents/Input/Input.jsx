import style from './style.module.css';

const Input = ({type, name, value, placeholder, label}) => {
    return (
        <label>
            <input type={type} name={name} value={value} placeholder={placeholder} />
            {label}
        </label>
        
    )
}

export default Input;