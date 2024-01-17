type Indexed<T extends Indexed = any> = {
  [key in string]: T;
};

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }
  if (typeof object === 'object') {
    const keysArr = path.split('.');

    const getField = (keysArr: string[], obj: Indexed) => {
      const isLast = keysArr.length === 1;
      const key = keysArr.shift();

      if (key) {
        if (!(key in obj)) {
          obj[key] = {};
        }
        if (isLast) {
          obj[key] = value;
        } else {
          getField(keysArr, obj[key]);
        }
      }
    };

    getField(keysArr, object as Indexed);
  }

  return object;
}

export default set;
