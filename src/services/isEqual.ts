export function isEqual(a: any, b: any): boolean {
  if (!a) {
    return false;
  }
  if (a === b) {
    return true;
  }

  if (a !== Object(a) && b !== Object(b)) {
    return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  let isTheSame = true;

  Object.keys(a).forEach((key) => {
    if (!(key in b)) {
      isTheSame = false;
    } else if (!isEqual(a[key], b[key])) {
      isTheSame = false;
    }
  });

  return isTheSame;
}

export default isEqual;
