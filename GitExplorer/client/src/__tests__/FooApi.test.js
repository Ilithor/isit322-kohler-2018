import React from 'react';
import FooApi from '../components/FooApi';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";

configure({ adapter: new Adapter() });

describe('FooApi tests', function() {
    it('renders without crashing', () => {
        const wrapper = shallow(<FooApi/>);
        expect(wrapper).to.have.length(1);
    });

    it('renders text and simulated button results', () => {
        const wrapper = shallow(<FooApi/>);
        const target = <p>foo: bar file: api.js result: success</p>;
        wrapper.find('Button').simulate('click');
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

});
