import { transform, generateX, generateW, generateH } from './math';
import { CONFIG_CONSTANTS } from '../config';
const { base, padding } = CONFIG_CONSTANTS;

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

describe('generateX', () => {
	it('should generate x dimension incorporating padding', () => {
		expect(generateX(0, CONFIG_CONSTANTS)).toEqual(padding);
	});
	it('should generate x dimension incorporating padding at column 6', () => {
		expect(generateX(6, CONFIG_CONSTANTS)).toEqual('257');
	});
});

describe('generateW', () => {
	it('should generate width incorporating padding', () => {
		expect(generateW(0, CONFIG_CONSTANTS)).toEqual(0);
	});
	it('should generate width incorporating padding', () => {
		expect(generateW(6, CONFIG_CONSTANTS)).toEqual('236');
	});
	it('should generate width incorporating padding', () => {
		expect(generateW(12, CONFIG_CONSTANTS)).toEqual('486');
	});
});

describe('generateH', () => {
	it('should generate height incorporating padding for height zero', () => {
		expect(generateH(0, CONFIG_CONSTANTS)).toEqual(0);
	});
	it('should generate height incorporating padding', () => {
		expect(generateH(6, CONFIG_CONSTANTS)).toEqual('236');
	});
	it('should generate height incorporating padding', () => {
		expect(generateH(12, CONFIG_CONSTANTS)).toEqual('486');
	});
});
