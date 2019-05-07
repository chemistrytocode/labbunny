import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reorder from './components/Form/Reorder'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Reorder component correctly', () => {
  const ReorderComponent = ReactDOM.render(<Reorder />);
  expect(ReorderComponent).toMatchSnapshot();
})
