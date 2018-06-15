import React from 'react';
import Micro01 from '../components/Micro01';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";

configure({ adapter: new Adapter() });

describe('My Micro01 tests', function() {

    it('renders without crashing', () => {
        const wrapper = shallow(<Micro01/>);
        expect(wrapper).to.have.length(1);
    });

    it('renders text and simulated button results', () => {
        const wrapper = shallow(<Micro01/>);
        const target = <p>You Rang: Hello</p>;
        wrapper.find('Button').simulate('click');
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
