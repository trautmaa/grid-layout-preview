import * as React from 'react';
import MiniGridLayout from '..';
import { render } from '@testing-library/react';
import { testLayout } from '../__mocks__/layouts';

test('it should render', () => {
	const { container } = render(<MiniGridLayout layout={testLayout} />);
	expect(container).toBeTruthy();
});
