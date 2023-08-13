class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidExprError';
  }
}

function evalString(expr) {
  try {
    // Check for invalid operator combinations
    if (/\+\+|--|\+\-|-\+|\*\/|\/\*/.test(expr)) {
      throw new InvalidExprError('Expression should not have an invalid combination of operators');
    }

    // Check for invalid start and end operators
    if (/^[+/*]/.test(expr)) {
      throw new SyntaxError('Expression should not start with invalid operator');
    }
    if (/[\+\-*/]$/.test(expr)) {
      throw new SyntaxError('Expression should not end with invalid operator');
    }

    // Check for valid expression format
    if (!/^[-+*/\d\s()]+$/.test(expr)) {
      throw new OutOfRangeError('Expression should only consist of integers and +-/* characters');
    }

    // Evaluate the expression
    return eval(expr);
  } catch (error) {
    throw error;
  }
}