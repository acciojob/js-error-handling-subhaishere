class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of operators");
    this.name = this.constructor.name;
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/].*/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/.*[\+\*\/\-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Rest of the code to evaluate the expression goes here
    // ...

    return true; // Replace with the actual evaluation result
  } catch (error) {
    if (error instanceof InvalidExprError || error instanceof SyntaxError) {
      console.error(error.name + ": " + error.message);
    } else {
      throw error; // Re-throw the error if it's not one of the expected errors
    }
  }
}

// Testing the evalString function
try {
  evalString("5 + 10"); // Valid expression
  evalString("5 ++ 10"); // Invalid combination of operators
  evalString("+5 + 10"); // Expression starting with an invalid operator
  evalString("5 + 10 -"); // Expression ending with an invalid operator
  evalString("5 + 10$"); // Expression with invalid character (OutOfRangeError)
} catch (error) {
  if (error instanceof OutOfRangeError) {
    console.error(error.name + ": " + error.message);
  } else {
    console.error("An unexpected error occurred:", error);
  }
}