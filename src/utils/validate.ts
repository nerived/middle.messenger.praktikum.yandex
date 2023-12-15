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
const PASSWORD_MESSAGE =
  'The password contains from 8 to 40 characters, at least one capital letter and a number are required.';
const validatorsRegExp = {
  [ValidationRules.LOGIN]: {
    regExp: /^(?!\\d+$)([a-zA-Z0-9_-]{3,20})$/,
    message:
      'Login contains from 3 to 20 characters, Latin, may contain numbers, but does not consist of them, no spaces, no special characters (hyphen and underscore are acceptable)',
  },
  [ValidationRules.EMAIL]: {
    // eslint-disable-next-line no-useless-escape
    regExp: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message:
      'Email can include numbers and special characters like hyphens and underscores, there must be a “dog” (@) and a period after it, but there must be letters before the period.',
  },
  [ValidationRules.PASSWORD]: {
    regExp: PASSWORD_REGEXP,
    message: PASSWORD_MESSAGE,
  },
  [ValidationRules.OLD_PASSWORD]: {
    regExp: PASSWORD_REGEXP,
    message: PASSWORD_MESSAGE,
  },
  [ValidationRules.NEW_PASSWORD]: {
    regExp: PASSWORD_REGEXP,
    message: PASSWORD_MESSAGE,
  },
  [ValidationRules.CHECK_PASSWORD]: {
    regExp: PASSWORD_REGEXP,
    message: PASSWORD_MESSAGE,
  },
  [ValidationRules.PHONE]: {
    regExp: /^\+?\d{10,15}$/,
    message:
      'The phone number contains from 10 to 15 characters, consists of numbers, maybe starts with a plus.',
  },

  [ValidationRules.FIRST_NAME]: {
    regExp: /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/,
    message:
      'The first name must begin with a capital letter, no spaces, no numbers, no special characters (only a hyphen is acceptable).',
  },
  [ValidationRules.SECOND_NAME]: {
    regExp: /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/,
    message:
      'The second name must begin with a capital letter, no spaces, no numbers, no special characters (only a hyphen is acceptable).',
  },

  [ValidationRules.MESSAGE]: {
    regExp: /^(?:(?![\s\n]+$)[\s\S])+$/,
    message: 'Must not be empty.',
  },
};

export const isValidValue = (name: ValidationRules, value: string) => {
  if (validatorsRegExp[name]) {
    if (!value) {
      return 'Must not be empty.';
    }

    return validatorsRegExp[name].regExp.test(value)
      ? ''
      : validatorsRegExp[name].message;
  }
  return '';
};
