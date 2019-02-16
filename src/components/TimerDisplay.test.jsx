import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from 'enzyme';

import TimerDisplay from './TimerDisplay';

describe('TimerDisplay', () => {
  let props;
  let mountedTimerDisplay;
  const timerDisplay = () => {
    if (!mountedTimerDisplay) {
      mountedTimerDisplay = mount(
        <TimerDisplay {...props} />
      );
    }
    return mountedTimerDisplay;
  };

  beforeEach(() => {
    props = {
      time: undefined,
      local: undefined,
    };
    mountedTimerDisplay = undefined;
  });

  it('always renders a div', () => {
    const divs = timerDisplay().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});