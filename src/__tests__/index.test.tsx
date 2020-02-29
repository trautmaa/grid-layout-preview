import * as React from 'react';
import Hello from '..';
import { render } from '@testing-library/react';

test("Component should show 'red' text 'Hello World'", () => {
	const { getByText } = render(<Hello text="alex" />);
	expect(getByText(/Hello alex/)).toBeTruthy();
});
