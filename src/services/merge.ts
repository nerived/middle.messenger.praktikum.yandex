type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(prop)) {
      // eslint-disable-next-line no-continue
      continue;
    }

    try {
      if (rhs[prop].constructor === Object) {
        rhs[prop] = merge(lhs[prop] as Indexed, rhs[prop] as Indexed);
      } else {
        lhs[prop] = rhs[prop];
      }
    } catch (e) {
      lhs[prop] = rhs[prop];
    }
  }

  return lhs;
}

export default merge;
