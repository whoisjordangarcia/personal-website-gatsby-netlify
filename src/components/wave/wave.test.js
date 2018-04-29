import React from 'react';
import renderer from 'react-test-renderer';

import { Wave } from './Wave';

it('renders correctly', () => {
  const tree = renderer.create(<Wave />).toJSON();
  expect(tree).toMatchSnapshot();
});
