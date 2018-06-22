import React from 'react';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import App from './../src/app/App.js';

Enzyme.configure({ adapter: new Adapter() });

test('Compare snapshots', () => {
  const component = renderer.create(<App />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders without crashing', () => {
  mount(<App />);
});
