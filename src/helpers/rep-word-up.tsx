// RU: Автоматическая замена первой буквы за заглавную | EN: Automatic capitalization of the first letter
export const RepWordUp = (item: string) => {
  let strNew = item.toLowerCase();
  return strNew.charAt(0).toUpperCase() + strNew.slice(1);
};
