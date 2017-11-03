import React from 'react';
import renderer from 'react-test-renderer';

import Wave from './wave';

it('renders correctly', () => {
  const tree = renderer.create(<Wave />).toJSON();
  expect(tree).toMatchSnapshot();
});
