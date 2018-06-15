import React from 'react';
import App from '../components/App';
import ElfHeader from '../components/ElfHeader';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('My App tests', function() {
    it('renders without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).to.have.length(1);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
