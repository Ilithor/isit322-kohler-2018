import React from 'react';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { shallow } from 'enzyme';
import ElfHeader from '../components/ElfHeader';
import ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('My ElfHeader tests', function () {
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><ElfHeader /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader/>);
        const welcome = <h2>Welcome to React</h2>;
        elfDebugEnzyme.getFirst(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});