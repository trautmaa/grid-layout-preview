import { Layout } from 'react-grid-layout';

export const testLayout: Layout[] = [
	{ i: 'a', x: 0, y: 0, w: 3, h: 12, static: true },
	{ i: 'b', x: 3, y: 0, w: 6, h: 12, minW: 2, maxW: 4 },
	{ i: 'c', x: 9, y: 0, w: 3, h: 6 },
	{ i: 'd', x: 9, y: 6, w: 3, h: 6 }
];
