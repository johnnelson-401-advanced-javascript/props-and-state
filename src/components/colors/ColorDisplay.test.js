import React from 'react';
import { mount } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay', () => {
  it('Renders a ColorDisplay Component', () => {
    let backgroundColor = 'black';
    const wrapper = mount(<ColorDisplay backgroundColor={backgroundColor}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
