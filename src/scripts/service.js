export const convertStateIntoString = (state) => {
    const renameKeys = {
        "Тип помещения": state.type,
        "Нужен дизайн-проект": state.design,
        "Площадь помещения": `${state.area} кв. м`,
        "Бюджет": `${state.budget} тысяч рублей`,
        "Количество комнат": state.rooms,
        "Номер телефона": state.phone
    }
    const convertedIntoString = JSON.stringify(renameKeys, null, 2);
    const removedBrackets = convertedIntoString.slice(1, convertedIntoString.length - 1 )
    return { data: removedBrackets }  

}
export const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;