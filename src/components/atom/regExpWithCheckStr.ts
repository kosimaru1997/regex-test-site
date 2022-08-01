export const regExpWithCheckStr = (str: string): RegExp | undefined => {
  try {
    return new RegExp(str);
  } catch (e) {
    return undefined;
  }
};
