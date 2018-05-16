import React from 'react';
import ReactDOM from 'react-dom';
import FooApi from '../components/FooApi';
import { shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import appInit from '../app-init';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('My FooApi tests', function () {
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooApi appInit={appInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('renders and reads initial text', () => {
    //     const wrapper = shallow(<FooApi appInit={appInit}/>);
    //     const welcome = "foo: status will go here file: File name will be placed here. result: result will go here;";
    //     expect(wrapper.contains(welcome)).toEqual(true);
    // });
});