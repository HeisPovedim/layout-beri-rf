export interface IFio {
  firstName: string,
  lastName: string,
  middleName: string,
  phone: any,
}

export interface ISliderValue {
  amount: number;
  days: number;
}

export interface IFormInput {
  value?: string;
  type: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  pattern: RegExp;
  patternValid: RegExp;
  onChange: (event: string) => void;
}

export interface IFormInputNumber {
  format: string;
  onChange: (event: string) => void;
}