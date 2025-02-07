function addNumbers(a: number, b: number): number {
	return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
	return `${a + b}`;
};


const multiply = (firstNumber: number, secondNumber?: number, base: number = 2): number => {
	return firstNumber * base;
};

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

console.log({result, result2, multiplyResult});

export {};