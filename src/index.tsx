import * as React from 'react';
import styled from 'styled-components';
import { genX, genW, genH, s } from './utils/math';
import { strokeWidth, base, padding, baseColumns, strokeDasharray } from './config';
import { ColumnOptions } from './interfaces/Interfaces';
import { Layout } from 'react-grid-layout';

export const SVGWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const generateX = (x: ColumnOptions) => genX(x, padding, baseColumns, base);
const generateW = (w: ColumnOptions) => genW(w, padding, baseColumns, base);
const generateH = (h: ColumnOptions) => genH(h, padding, baseColumns, base);
const generateY = (y: ColumnOptions) => generateX(y);

export const genSVG = (layout: Layout[]) => {
	return layout.map((tile: Layout) => {
		return (
			<rect
				key={tile.i}
				x={generateX(tile.x)}
				y={generateY(tile.y)}
				width={generateW(tile.w)}
				height={generateH(tile.h)}
				strokeWidth={strokeWidth}
				rx={padding}
				strokeDasharray={strokeDasharray}
				stroke="#909090"
			/>
		);
	});
};

export const App: React.FC<{ layout: Layout[] }> = ({ layout }) => {
	return (
		<SVGWrapper>
			<svg
				fill="#e9e9e9"
				style={{ width: base, height: base }}
				viewBox={`0 0 ${s(base)} ${s(base)}`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="0" width={s(base)} height={s(base)} rx={s(padding)} />
				{genSVG(layout)}
			</svg>
		</SVGWrapper>
	);
};

export default App;
