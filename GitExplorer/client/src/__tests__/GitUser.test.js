import React from 'react';
import ReactDOM from 'react-dom';
import GitUser from '../components/GitUser';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from "enzyme";
import {BrowserRouter} from "react-router-dom";

configure({ adapter: new Adapter() });

describe('My GitUser tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GitUser/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
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
