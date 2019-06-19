import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App from './App';

describe('<App />', () => {
  it('runs tests', () => {
    expect(true).toBe(true)
  });

  // 2. write this test 
  // it('matches snapshot', () => {
  //   const tree = renderer.create(<App flag={'yes'} />); // generates a DOM tree

  //   // snapshots are a JSON representation of the DOM tree
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
  if('matches snapshot', () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
