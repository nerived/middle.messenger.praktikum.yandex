type StringIndexed = Record<string, any>;

const prepareItem = (key: string, item: StringIndexed, params: string[]) => {
  if (typeof item === 'object') {
    params.push(getParams(key, item));
  } else {
    params.push(`${key}=${item}`);
  }
};

const getArrayItems = (
  prevKey: string,
  items: any[],
  params: string[]
): void => {
  items.forEach((item, index) => {
    const curentKey = `${prevKey}[${index}]`;
    prepareItem(curentKey, item, params);
  });
};

const getObjectItems = (
  prevKey: string,
  items: StringIndexed,
  params: string[]
): void => {
  Object.keys(items).forEach((key) => {
    const item = items[key];
    const curentKey = `${prevKey}[${key}]`;
    prepareItem(curentKey, item, params);
  });
};

function getParams(prevKey: string, items: StringIndexed): string {
  let params: string[] = [];

  if (Array.isArray(items)) {
    getArrayItems(prevKey, items, params);
  } else {
    getObjectItems(prevKey, items, params);
  }

  return params.join('&');
}

export function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== 'object' || data === null) {
    throw new Error('input must be an object');
  }

  const params: string[] = [];

  Object.keys(data).forEach((key) => {
    const item = data[key];
    prepareItem(key, item, params);
  });

  return params.join('&');
}

export default queryStringify;
