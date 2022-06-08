export const stringifyState = (state) => {
  return {
    "Тип жилья": state.type,
    "Нужен ли дизайн-проект": state.design,
    "Площадь помещения": state.area,
    Бюджет: state.budget,
    "Количество комнат": state.rooms,
    "Номер телефона контакта": state.phone,
  };
};
