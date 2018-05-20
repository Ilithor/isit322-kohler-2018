import React from 'react';
import ReactDOM from 'react-dom';
import Micro01 from '../components/Micro01';
import appInit from '../app-init';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('My Micro01 tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Micro01 appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
