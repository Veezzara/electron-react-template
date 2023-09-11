const nullishThrow = <T>(
  value: T | null | undefined,
  message: string = "Value is null or undefined",
) => {
  if (value === null || value === undefined) {
    throw new Error(message);
  }

  return value;
};

export default nullishThrow;
