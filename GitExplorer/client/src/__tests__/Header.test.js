import React from 'react';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('My Header tests', function () {
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header/>);
        const welcome = <h2>Welcome to React</h2>;
        elfDebugEnzyme.getFirst(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});