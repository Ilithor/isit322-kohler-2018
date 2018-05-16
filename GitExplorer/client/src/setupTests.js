import React from 'react';
import appInit from './app-init';
import elfDebugEnzyme from './ElfDebugEnzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './components/App';

require('./__mocks__/fetch');

// it('renders state of File paragraph after button click', () => {
//     const wrapper = shallow(<App appInit={appInit}/>);
//     const statusParagraph = <p className="App-intro">status: Mock Server Happy</p>;
//     wrapper.find('#queryServer').simulate('click');
//     setImmediate(() => {
//         wrapper.update();
//         elfDebugEnzyme.getFirst(wrapper, 'p');
//         //expect(true).toBe(true);
//         expect(wrapper.contains(statusParagraph)).toBe(true);
//     });
// });