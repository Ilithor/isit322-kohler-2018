import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
import ElfHeader from '../components/ElfHeader';
import FooApi from '../components/FooApi';
import GitUser from '../components/GitUser';
import Micro from '../components/Micro01';
import ShowNewGist from '../components/ShowNewGist';

describe('SnapShot Tests', function() {

    it('should take an App snapshot', () => {
        const elfTree = shallow(<App />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an ElfHeader snapshot', () => {
        const elfTree = shallow(<ElfHeader/>);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an FooApi snapshot', () => {
        const elfTree = shallow(<FooApi />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an GitUser snapshot', () => {
        const elfTree = shallow(<GitUser />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an Micro snapshot', () => {
        const elfTree = shallow(<Micro />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an ShowNewGist snapshot', () => {
        const elfTree = shallow(<ShowNewGist />);
        expect(elfTree).toMatchSnapshot();
    });
});