import React from 'react';
import renderer from 'react-test-renderer';

import { Wave } from '../../components';

it('renders correctly', () => {
  const tree = renderer.create(<Wave />).toJSON();
  expect(tree).toMatchSnapshot();
});
