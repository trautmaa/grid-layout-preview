# Grid Layout Preview

## Description
Grid Layout Preview is a React component that renders a [React Grid Layout](https://github.com/STRML/react-grid-layout) as an SVG. This could be useful if you want to show a preview of what a layout looks like.

## Example

``` tsx
const exampleLayout: Layout[] = [
	{ i: 'a', x: 0, y: 0, w: 3, h: 12, static: true },
	{ i: 'b', x: 3, y: 0, w: 6, h: 12, minW: 2, maxW: 4 },
	{ i: 'c', x: 9, y: 0, w: 3, h: 6 },
	{ i: 'd', x: 9, y: 6, w: 3, h: 6 }
];

const base = 500;

export const config = {
	base,
	padding: 6,
	baseColumns: 12,
	strokeWidth: 3,
	strokeDashArray: 10,
	fill: '#e9e9e9',
	stroke: '#909090',
	viewBox: `0 0 500 500`
};

const App: React.FC() {
  return (
    <div className="App">
	  <header className="App-header">
	    <GridLayoutPreview layout={testLayout} options={config} />
	  </header>
	</div>
  );
}
```

![BitMEX UI](http://i.imgur.com/oo1NT6c.gif)
