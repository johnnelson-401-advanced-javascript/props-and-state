import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor', () => {
  it('Renders a random Color', () => {
    let wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
