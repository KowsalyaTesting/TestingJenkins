# Testing Jenkins

Basic testing setup with Jest for unit testing.

## Getting Started

### Installation

```bash
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Project Structure

```
├── src/                    # Source code
│   ├── calculator.js       # Calculator utility functions
│   └── stringHelper.js     # String utility functions
├── tests/                  # Test files
│   ├── calculator.test.js  # Tests for calculator
│   └── stringHelper.test.js# Tests for string helper
├── package.json            # Project dependencies
├── jest.config.js          # Jest configuration
└── README.md              # Documentation
```

## Test Coverage

The project includes tests for:

### Calculator Module
- Addition with positive, negative, and zero values
- Subtraction
- Multiplication
- Division with error handling

### String Helper Module
- String reversal
- String capitalization
- Palindrome detection

## Technologies Used

- **Jest** - Testing framework
- **Node.js** - JavaScript runtime

## Next Steps

1. Install dependencies: `npm install`
2. Run tests: `npm test`
3. Add more test cases as needed
4. Integrate with Jenkins CI/CD pipeline
