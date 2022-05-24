const Button = ({name, click, isDisabled, action}) => {

    function handleClick() {
        click && click({type: action})
    }

    return (
        <button onClick={() => handleClick()} disabled={isDisabled} >{name}</button>
    )

}
export default Button