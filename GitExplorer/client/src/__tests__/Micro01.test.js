import React from 'react';
import ReactDOM from 'react-dom';
import Micro01 from '../components/Micro01';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";
import {BrowserRouter} from "react-router-dom";

configure({ adapter: new Adapter() });

describe('My Micro01 tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Micro01/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders text and simulated button results', () => {
        const wrapper = shallow(<Micro01/>);
        const target = <p>You Rang: Hello</p>;
        wrapper.find('Button').simulate('click');
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
