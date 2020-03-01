import * as React from 'react';
import { s, generateX, generateY, generateW, generateH } from './utils/math';
import { Layout } from 'react-grid-layout';
import { CONFIG_CONSTANTS } from './config';
import { ConfigOptions } from './interfaces/Interfaces';

export const genSVG = (layout: Layout[], options: ConfigOptions) => {
	const { strokeWidth, strokeDashArray, stroke, padding } = options;
	return layout.map((tile: Layout) => {
		return (
			<rect
				key={tile.i}
				x={generateX(tile.x, options)}
				y={generateY(tile.y, options)}
				width={generateW(tile.w, options)}
				height={generateH(tile.h, options)}
				strokeWidth={strokeWidth}
				rx={padding}
				strokeDasharray={strokeDashArray}
				stroke={stroke}
			/>
		);
	});
};

export const App: React.FC<{ layout: Layout[]; options?: ConfigOptions }> = ({ layout, options }) => {
	const configOptions = options ? options : CONFIG_CONSTANTS;
	const { base, padding, fill, viewBox } = configOptions;
	return (
		<svg fill={fill} style={{ width: base, height: base }} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
			<rect x="0" width={s(base)} height={s(base)} rx={s(padding)} />
			{genSVG(layout, configOptions)}
		</svg>
	);
};

export default App;
