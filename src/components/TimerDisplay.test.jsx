import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount } from 'enzyme';

import TimerDisplay from './TimerDisplay';

describe('TimerDisplay', () => {

  it('renders a div', () => {
    const divs = mount(<TimerDisplay />).find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe('renders correct times', () => {
    it('no props', () => {
      const text = mount(<TimerDisplay />).text();
      expect(text).toBe('0:00:00');
    });
    it('1', () => {
      const text = mount(<TimerDisplay {...{ time: 1 }} />).text();
      expect(text).toBe('0:00:01');
    });
    it('-1', () => {
      const text = mount(<TimerDisplay {...{ time: -1 }} />).text();
      expect(text).toBe('-0:00:01');
    });
    it('12', () => {
      const text = mount(<TimerDisplay {...{ time: 12 }} />).text();
      expect(text).toBe('0:00:12');
    });
    it('123', () => {
      const text = mount(<TimerDisplay {...{ time: 113 }} />).text();
      expect(text).toBe('0:01:53');
    });
    it('200', () => {
      const text = mount(<TimerDisplay {...{ time: 200 }} />).text();
      expect(text).toBe('0:03:20');
    });
    it('20000', () => {
      const text = mount(<TimerDisplay {...{ time: 2000 }} />).text();
      expect(text).toBe('0:33:20');
    });
    it('200000', () => {
      const text = mount(<TimerDisplay {...{ time: 20000 }} />).text();
      expect(text).toBe('5:33:20');
    });
    it('200000', () => {
      const text = mount(<TimerDisplay {...{ time: 200000 }} />).text();
      expect(text).toBe('55:33:20');
    });
    it('2000000', () => {
      const text = mount(<TimerDisplay {...{ time: 2000000 }} />).text();
      expect(text).toBe('555:33:20');
    });
    it('-2000000', () => {
      const text = mount(<TimerDisplay {...{ time: -2000000 }} />).text();
      expect(text).toBe('-555:33:20');
    });
  });
});
