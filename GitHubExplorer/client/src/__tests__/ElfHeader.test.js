import React from 'react';
import ElfHeader from '../components/ElfHeader';
import ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('My ElfHeader tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <ElfHeader />
            </MemoryRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
