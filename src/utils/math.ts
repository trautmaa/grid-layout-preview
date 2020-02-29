import { ColumnOptions } from './../interfaces/Interfaces';
export const s = (num: number) => num.toString();

export const transform = (value: number, numberOfColumns: ColumnOptions, base: number) => {
	return value / numberOfColumns * base;
};

export const genX = (cols: ColumnOptions, padding: number, baseColumns: ColumnOptions, base: number) => {
	if (cols === 0) {
		return padding;
	}
	return s(transform(cols, baseColumns, base) + padding);
};

export const genW = (cols: ColumnOptions, padding: number, baseColumns: ColumnOptions, base: number) => {
	if (cols === 0) {
		return 0;
	}
	return s(transform(cols, baseColumns, base) - padding * 2);
};

export const genH = (height: number, padding: number, baseColumns: ColumnOptions, base: number) => {
	if (height === 0) {
		return padding;
	}
	return s(transform(height, baseColumns, base) - padding * 2);
};
