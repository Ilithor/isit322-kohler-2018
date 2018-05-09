import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Header from '../components/Header';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders and reads H1 text', () => {
    const wrapper = shallow(<Header/>);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});