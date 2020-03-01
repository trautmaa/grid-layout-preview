import { ColumnOptions, ConfigOptions } from './../interfaces/Interfaces';

export const s = (num: number) => num.toString();

export const transform = (value: number, numberOfColumns: ColumnOptions, base: number) => {
	return value / numberOfColumns * base;
};

export const generateX = (cols: ColumnOptions, options: ConfigOptions) => {
	const { padding, baseColumns, base } = options;
	if (cols === 0) {
		return padding;
	}
	return s(transform(cols, baseColumns, base) + padding);
};

export const generateW = (cols: ColumnOptions, options: ConfigOptions) => {
	const { padding, baseColumns, base } = options;
	if (cols === 0) {
		return 0;
	}
	return s(transform(cols, baseColumns, base) - padding * 2);
};

export const generateH = (height: number, options: ConfigOptions) => {
	const { padding, baseColumns, base } = options;
	if (height === 0) {
		return 0;
	}
	return s(transform(height, baseColumns, base) - padding * 2);
};

export const generateY = generateX;
