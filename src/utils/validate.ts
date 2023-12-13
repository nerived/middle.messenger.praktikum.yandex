export const enum ValidationRules {
  LOGIN = 'login',
  EMAIL = 'email',
  PASSWORD = 'password',
  OLD_PASSWORD = 'oldPassword',
  NEW_PASSWORD = 'newPassword',
  CHECK_PASSWORD = 'newPasswordCheck',
  PHONE = 'phone',
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
  MESSAGE = 'message',
}
const PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,40}$/;
const validatorsRegExp = {
  [ValidationRules.LOGIN]: /^(?!\\d+$)([a-zA-Z0-9_-]{3,20})$/,
  // eslint-disable-next-line no-useless-escape
  [ValidationRules.EMAIL]: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  [ValidationRules.PASSWORD]: PASSWORD_REGEXP,
  [ValidationRules.OLD_PASSWORD]: PASSWORD_REGEXP,
  [ValidationRules.NEW_PASSWORD]: PASSWORD_REGEXP,
  [ValidationRules.CHECK_PASSWORD]: PASSWORD_REGEXP,
  [ValidationRules.PHONE]: /^\+?\d{10,15}$/,
  [ValidationRules.FIRST_NAME]:
    /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/,
  [ValidationRules.SECOND_NAME]:
    /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/,
  [ValidationRules.MESSAGE]: /^(?:(?![\s\n]+$)[\s\S])+$/,
};

export const isValidValue = (name: ValidationRules, value: string) => {
  if (validatorsRegExp[name]) {
    return validatorsRegExp[name].test(value);
  }
  return true;
};
