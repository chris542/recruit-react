import React from 'react';
import { mount } from 'enzyme';
import Navigation from '../Navigation';

describe('<Navigation/>', function() {
  let nav:any;

  beforeEach(() => {
    nav = mount(<Navigation />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', function() {
    mount(<Navigation />);
  });
  it('opens navigatioon', function() {
    const navButton = nav.find('.navIcon');
    navButton.simulate('click');
    const openedNav = nav.find('.opened');
    expect(openedNav.length).toBe(1);
  });
  it('opens then closes navigation', function() {
    const navButton = nav.find('.navIcon');
    navButton.simulate('click').simulate('click');
    const openedNav = nav.find('.opened');
    expect(openedNav.length).toBe(0);
  });
});

