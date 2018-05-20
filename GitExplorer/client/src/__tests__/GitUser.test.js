import React from 'react';
import ReactDOM from 'react-dom';
import GitUser from '../components/GitUser';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import appInit from '../app-init';

Enzyme.configure({ adapter: new Adapter() });

describe('My GitUser tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitUser appInit={appInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
