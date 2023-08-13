//your code here
function evaluateExpression(expression) {
  // Check for invalid characters
  if (!/^[\d\s+\-/*]+$/.test(expression)) {
    throw new OutOfRangeError(expression);
  }




//your code here

class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function evalString(expression) {
  try {
    // Check for invalid combination of operators
    if (
      expression.includes("++") ||
      expression.includes("+-") ||
      expression.includes("-+") ||
      expression.includes("--") ||
      expression.includes("/*") ||
      expression.includes("/+") ||
      expression.includes("*/") ||
      expression.includes("//-")
    ) {
      throw new InvalidExprError(
        "Expression should not have an invalid combination of operators"
      );
    }

    // Check for invalid starting operator
    if (
      expression.startsWith("+") ||
      expression.startsWith("/") ||
      expression.startsWith("*")
    ) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    // Check for invalid ending operator
    if (
      expression.endsWith("+") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("-")
    ) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Check for characters other than digits, operators, and spaces
    const allowedChars = new Set("0123456789+-*/ ");
    for (let i = 0; i < expression.length; i++) {
      if (!allowedChars.has(expression[i])) {
        throw new OutOfRangeError(
          "Expression should only consist of integers and +-/* characters"
        );
      }
    }

    // Evaluate the expression
    const result = eval(expression);
    return result;
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      return `${error.name}: ${error.message}`;
    } else if (error instanceof SyntaxError) {
      return `Syntax Error: ${error.message}`;
    } else {
      throw error;
    }
  }
}

// Test cases
try {
  const expression = prompt().trim();
  const result = evalString(expression);
  console.log(result);
} catch (error) {
  console.log("Error:", error);
}