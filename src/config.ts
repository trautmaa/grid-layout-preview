import { ConfigOptions } from './interfaces/Interfaces';
import { s } from './utils/math';

const base = 500;

export const CONFIG_CONSTANTS: ConfigOptions = {
	base,
	padding: 7,
	baseColumns: 12,
	strokeWidth: 3,
	strokeDashArray: 4,
	fill: '#e9e9e9',
	stroke: '#909090',
	viewBox: `0 0 ${s(base)} ${s(base)}`
};
