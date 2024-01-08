export const trim = (str: string, pattern = '\\s') => {
  return str.replace(new RegExp(`^[${pattern}]+|[${pattern}]+$`, 'g'), '');
};

export default trim;
