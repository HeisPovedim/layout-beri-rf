// #: НАБОР РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
// FIO
export const RegForInitials: RegExp = /[^АA-ЯаZa-яЁёz\s]/gi;
// Адрес
export const RegForAddress: RegExp = /[^АA-ЯаZa-яЁёz()0-9,.-/\s]/g;
// Номер дома
export const RegForHouseNumber: RegExp = /[^АA-ЯаZa-яЁёz()0-9-/\s]/g;
// Email
export const RegForApartmentNumber: RegExp =
  /^[a-zA-Z](([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+)+\.[a-zA-Z]{2,}))$/;
