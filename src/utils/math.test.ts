import { transform, genX, genW } from './math';

const base = 500;
const padding = 5;
const baseColumns = 12;

describe('transform', () => {
	it('should convert columns to proper width', () => {
		expect(transform(0, 12, base)).toEqual(0);
	});
	it('should convert columns to proper width', () => {
		expect(transform(6, 12, base)).toEqual(250);
	});
	it('should convert columns to proper width', () => {
		expect(transform(3, 12, base)).toEqual(125);
	});
});

describe('genX', () => {
	it('should generate x dimension incorporating padding', () => {
		expect(genX(0, padding, baseColumns, base)).toEqual(padding);
	});
	it('should generate x dimension incorporating padding', () => {
		expect(genX(6, padding, baseColumns, base)).toEqual('255');
	});
});

describe('genW', () => {
	it('should generate width incorporating padding', () => {
		expect(genW(0, padding, baseColumns, base)).toEqual(0);
	});
	it('should generate width incorporating padding', () => {
		expect(genW(6, padding, baseColumns, base)).toEqual('240');
	});
	it('should generate width incorporating padding', () => {
		expect(genW(12, padding, baseColumns, base)).toEqual('490');
	});
});
