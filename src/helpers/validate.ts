type Error = {
    field: string;
    message: string;
  };
  
  export const createValidationError = (validationError: any[]) => {
    const errors: Error[] = [];
  
    for (const [key, value] of Object.entries(validationError)) {
      errors.push({
        field: key,
        message: value[0],
      });
    }
  
    return errors;
  };
  
  export function arrayEquals<T>(a: T[], b: T[]) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  