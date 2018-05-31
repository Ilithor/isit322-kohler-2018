import React from 'react';
import ReactDOM from 'react-dom';
import FooApi from '../components/FooApi';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import {configure, shallow} from "enzyme";

configure({ adapter: new Adapter() });

describe('FooApi tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FooApi/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders text and simulated button results', () => {
        const wrapper = shallow(<FooApi/>);
        const target = <p>foo: bar file: api.js result: success</p>;
        wrapper.find('Button').simulate('click');
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

});
