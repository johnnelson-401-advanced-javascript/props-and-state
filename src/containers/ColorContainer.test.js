import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer', () => {
  it('Renders a ColorContainer', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
