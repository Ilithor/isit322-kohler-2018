import React from 'react';
import GitUser from '../components/GitUser';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";

configure({ adapter: new Adapter() });

describe('My GitUser tests', function() {

    it('renders without crashing', () => {
        const wrapper = shallow(<GitUser/>);
        expect(wrapper).to.have.length(1);
    });

    it('renders text and simulated button results', () => {
        const wrapper = shallow(<GitUser/>);
        const target = <p>
            Url: https://api.github.com/users/Ilithor
        </p>;
        wrapper.find('Button').simulate('click');
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
