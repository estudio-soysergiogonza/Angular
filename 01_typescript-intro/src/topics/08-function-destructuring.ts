export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: 'Nokia  A1',
	price: 150.0
};

const tablet: Product = {
	description: 'iPad Air',
	price: 250.0
};

interface TaxCalculationOptions {
	tax: number;
	products: Product[];
}

// const taxCalculation = ({tax, products}: TaxCalculationOptions): [number, number] => {
export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
	const {tax, products}: TaxCalculationOptions = options;
	let total: number = 0;
	
	products.forEach(({price}) => {
		
		total += price;
	});
	
	return [total, total * tax];
	
};

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxTotal] = taxCalculation({
	products: shoppingCart,
	tax
});

console.log('Total', total);
console.log('Tax', taxTotal);

export {};