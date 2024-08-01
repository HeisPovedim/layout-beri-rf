// #: НАБОР РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
// Инициалы
export const RegForInitials = /[^АA-ЯаZa-яЁёz\s]/gi;
// Адрес
export const RegForAddress = /[^АA-ЯаZa-яЁёz()0-9,.-/\s]/g;
// Номер дома
export const RegForHouseNumber = /[^АA-ЯаZa-яЁёz()0-9-/\s]/g;
// Номер квартиры
export const RegForApartmentNumber =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
