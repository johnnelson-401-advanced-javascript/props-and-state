import React from 'react';
import { mount } from 'enzyme';
import ColorPicker from './ColorPicker';


describe('ColorPicker', () => {
  it('Renders a ColorPicker', () => {
    const colors = ['red', 'green', 'yellow', 'blue', 'black'];
    const selectColor = () => {
      return 'black';
    };
    const wrapper = mount(<ColorPicker 
      selectColor={selectColor}
      colors={colors}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
